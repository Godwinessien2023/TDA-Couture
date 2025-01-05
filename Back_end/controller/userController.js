const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utilities/validateMongodbId');
const {generateToken} = require('../config/jwToken');
const {generateRefreshToken} = require('../config/refreshToken');
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
            const refreshToken = await generateRefreshToken(findUser._id);
            const updateuser = await User.findByIdAndUpdate(
                findUser.id,
                {
                    refreshToken: refreshToken,
                },
            { new: true}
            );
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
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


// function to handle refresh token using refrsh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) throw new Error('No refresh token in cookies');
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if(!user) throw new Error('refresh token not found');
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('Invalid refresh token');
        }
        const accessToken = generateToken(user._id);
        res.json({ accessToken });
    });
});

 

// function to update a user
const updateUser = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    validateMongoDbId(_id);
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
    ValidateMongoDbId(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json(deleteaUser);
    } catch (error) {
        throw new Error('Error deleting user');
    }

});
    
// Block a user by id
const blockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id);
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


//Unblock a user
const unblockUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id);
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


// funtion to logout
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) throw new Error('No refresh token in cookies');
    const refreshtoken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken: refreshtoken });
    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204).json({
            message: 'Sucessfuly logged out',
        });
    }
    await User.findOneAndUpdate({
        refreshToken: '',    
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204).json({
        message: 'Sucessfuly logged out',
    });

});

// Export the modules
module.exports = {createUser, loginUser, getUsers, getaUser, deleteaUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout};