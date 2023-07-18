// import the required dependencies
const router = require('express').Router();
const { Comment } = require('../../models');

// import the authentication helper
const withAuth = require('../../utils/auth');

// create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        // create a new comment
        const newComment = await Comment.create({
            ...req.body,
            // use the id from the session
            userId: req.session.userId,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

// export the module
module.exports = router;