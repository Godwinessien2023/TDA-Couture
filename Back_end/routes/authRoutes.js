const express = require('express');
const { 
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
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);
router.get('/sessionauth', sessionAuth);
router.post('/logout', logout);

 
// Export the router module
module.exports = router;
