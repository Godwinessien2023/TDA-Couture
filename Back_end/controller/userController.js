const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../config/jwToken');
const validateDbid = require('../utils/validateDbid');
const {refreshToken} = require('../config/refreshToken');
const jwt = require('jsonwebtoken');

// Create A New User
const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await User.findOne({email: email});
        if (!findUser) {
            // create a new user
            const newUser = await User.create(req.body);
            res.json(newUser);
        } else {
            throw new Error('User already exists');
        }
    });

// Login a User and reeturn error message for invalid credentials
const loginUser = asyncHandler(async (req, res) => {
        const {email, password} = req.body;
        const findUser = await User.findOne({email: email});
        if (findUser && (await findUser.isPasswordMatched(password))) {
            const refreshToken = await refreshToken(findUser._id);
            const updateuser = await User.findByIdAndUpdate(
                findUser._id,
                {
                    refreshToken: refreshToken,
                },
                {
                    new: true,
                }
            );
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
            });
            res.json({
                _id: findUser._id,
                firstname: findUser.firstname,
                lastname: findUser.lastname,
                email: findUser.email,
                mobile: findUser.mobile,
                token: generateToken(findUser._id),
            });
        } else {
            throw new Error('Invalid email or password');
        }
    });

// Handles session authentication
const sessionAuth = asyncHandler(async (req, res,) => {
    const cookies = req.cookies;
    if (!cookies.refreshToken) throw new Error('Access denied, no token provided');
    const refreshToken = cookies.refreshToken;
    const user = await User.findOne({refreshToken});
    if (!user) throw new Error('Invalid token');
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('Invalid token');
        }
        const accessToken = generateToken(user._id);
        res.json ({ accessToken});
    });
});

// function to log users out
const logout = asyncHandler (async(req, res) => {
    const cookies = req.cookies;
    if (!cookies.refreshToken) throw new Error('no token provided');
    const refreshToken = cookies.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookies('refreshToken', {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204);
    }
    await User.findByIdAndUpdate({ refreshToken: null });
    res.clearCookies('refreshToken', {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204);
});


// function to update a user
const updateUser = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    validateDbid(_id);
    try {
        const updateUser = await User.findByIdAndUpdate(
            _id,
            {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            mobile: req.body.mobile,
        },
        {
            new: true,
        }
        );
        res.json(updateUser);
    } catch (error) {
        throw new Error('Error updating user');
    }
});

// function to get all users
const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        throw new Error('Error fetching users');
    }; 
});

// function to get a single user
const getaUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateDbid(id);
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        throw new Error('Error fetching user');
    }
}); 

// function to delete a user
const deleteaUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateDbid(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json(deleteaUser);
    } catch (error) {
        throw new Error('Error deleting user');
    }

});
    
const blockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateDbid(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json ({
            message: 'User Blocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});

const unblockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateDbid(id);
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        res.json ({
            message: 'User unBlocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Export the modules
module.exports = {
    createUser,
    loginUser,
    getUsers,
    getaUser,
    deleteaUser,
    updateUser,
    blockUser,
    unblockUser,
    sessionAuth,
    logout
};
