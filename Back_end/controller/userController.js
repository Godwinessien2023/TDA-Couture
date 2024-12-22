const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/jwToken');

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

// function to update a user
const updateUser = asyncHandler(async (req, res) => {
    const {_id} = req.user;
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
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json(deleteaUser);
    } catch (error) {
        throw new Error('Error deleting user');
    }

});
    


// Export the modules
module.exports = {createUser, loginUser, getUsers, getaUser, deleteaUser, updateUser};