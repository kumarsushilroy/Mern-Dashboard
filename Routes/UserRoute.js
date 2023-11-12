
const express = require('express');

const router = express.Router();

const {createUser, getAllUser, loginUser} = require('../Controllers/UserControl')


// CREATE USER
router.route('/create/user').post(createUser);

//Login User
router.route('/login/user').post(loginUser);

//Get All Users
router.route('/get/all/users').get(getAllUser);




module.exports = router;