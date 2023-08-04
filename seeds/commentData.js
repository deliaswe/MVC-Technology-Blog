const { Comment } = require('../models');
const commentData = [
    {
        comment_text: 'Great car!',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'I love this car!',
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: 'I want this car!',
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: 'I want this car!',
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: 'I want this car!',
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: 'Sweet cars!',
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: 'BMW!',
        user_id: 2,
        post_id: 2,
    },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;