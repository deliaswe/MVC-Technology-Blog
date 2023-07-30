const router = require('express').Router();
const userRoutes = require('./postRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// set up the routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export the module
module.exports = router;