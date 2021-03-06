const express = require('express'),
auth = require('../middlewares/auth'),
router = express.Router(), 
{
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    getUserProfile,
    getCategory,
    changePassword
} = require('../controllers');

router.post('/signup', signup);
router.post('/login', login);
router.post('/category', getCategory)
router.get('/profile',auth, getUserProfile);
router.get('/',auth, getUsers);
router.put('/edituser',auth, updateUser);
router.delete('/delete',auth, deleteUser);
router.put('/changepass', auth, changePassword);

module.exports = router;