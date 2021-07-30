var express = require('express');
var router = express.Router();

// require controller modules
const main_controller = require('../controllers/mainController');

/**
 * ----------------------------GET REQUESTS-----------------------------------------
 */

/* GET home page. */
router.get('/', main_controller.index);

/* GET Sign up page */
router.get('/sign-up', main_controller.sign_up_get);

/* GET Login page */
router.get('/login', main_controller.login_get);


module.exports = router;
