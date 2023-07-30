// import the models
const User = require('./Users');
const Post = require('./Post');
const Comment = require('./Comment');

// define the relationships between the models
User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

// export the modules
module.exports = { User, Post, Comment };