const router = require('express').Router();
const userRoutes = require('./users-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// set up the routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export the module
module.exports = router;