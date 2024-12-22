const express = require('express');
const { createUser,
    loginUser,
    getUsers,
    getaUser,
    deleteaUser,
    updateUser,
} = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// routes
router.post('/register' , createUser);
router.post('/login' , loginUser);
router.get('/all-users' , getUsers);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/:id' , deleteaUser);
router.put('/update-user', authMiddleware, updateUser);
 
// Export the router module
module.exports = router;
