const { Post } = require('../models');
const postData = [
    {
        title: 'First Car Blog Post',
        content: 'This is my first car blog post. The red BMW M3 Competition is 🔥',
        user_id: 1,
    },
    {
        title: 'Second Car Blog Post',
        content: 'I am so in love with BMW M3 and M4 💚💙🖤',
        user_id: 2,
    },
    {
        title: 'Third Car Blog Post',
        content: 'This line up is SICK!',
        user_id: 3,
    },
    {
        title: 'Fourth Car Blog Post',
        content: 'The big grill on the BMWs are dope!',
        user_id: 4,
    },
    {
        title: 'Fifth Car Blog Post',
        content: 'BMW car clubs are the best!',
        user_id: 5,
    },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
