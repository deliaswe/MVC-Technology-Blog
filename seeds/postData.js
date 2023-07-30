const { Post } = require('../models');
const postData = [
    {
        title: 'First Car Blog Post',
        content: 'This is my first car blog post. I am so excited to share my car with you!',
        user_id: 1,
    },
    {
        title: 'Second Car Blog Post',
        content: 'This is my second car blog post. I am so excited to share my car with you!',
        user_id: 2,
    },
    {
        title: 'Third Car Blog Post',
        content: 'This is my third car blog post. I am so excited to share my car with you!',
        user_id: 3,
    },
    {
        title: 'Fourth Car Blog Post',
        content: 'This is my fourth car blog post. I am so excited to share my car with you!',
        user_id: 4,
    },
    {
        title: 'Fifth Car Blog Post',
        content: 'This is my fifth car blog post. I am so excited to share my car with you!',
        user_id: 5,
    },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
