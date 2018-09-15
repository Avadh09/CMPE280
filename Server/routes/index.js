/**
 * http://usejsdoc.org/
 */

var express = require('express');
let app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');

// /*
//  * Get Job list
//  */
// router.get('/', cntrMain.getJoblistPage);


/*
 * Get the login page
 */

//router.get('/', cntrMain.getJoblistPage)
router.get('/', cntrMain.home)
router.get('/home', cntrMain.home);

/*
 * To get the registration page
 */
router.get('/signUp', cntrMain.signUp);

/*
 * Post registration
 */
router.post('/registration', cntrMain.postRegistration);

/*
 * Post login 
 */
router.post('/login',cntrMain.postLogin);


/*
 * post apply Job
 */
router.post('/applyJob', cntrMain.postApplyJob);

/*
 * get logout
 */

router.get('/logout', cntrMain.getLogout);

/*
 * Defining the router
 */

module.exports = router;