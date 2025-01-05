const express = require('express');
const { createUser,
    loginUser,
    getUsers,
    getaUser,
    deleteaUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
} = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// routes
router.post('/register' , createUser);
router.post('/login' , loginUser);
router.get('/logout' , logout);
router.get('/all-users' , getUsers);
router.get('/refresh', handleRefreshToken);
router.get('/:id', authMiddleware, isAdmin, getaUser);
router.delete('/:id', authMiddleware, deleteaUser);
router.put('/update-user', authMiddleware, updateUser);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

 
// Export the router module
module.exports = router;
