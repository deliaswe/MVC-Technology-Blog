// import the module and router
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// set up the routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// export the module
module.exports = router;