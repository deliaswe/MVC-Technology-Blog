// inporting post model
const { User } = require('../models');
// creating user data
const userData = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: 'password1'
    },
    {
        username: 'user2',
        email: 'user2@gamil.com',
        password: 'password2'
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
        password: 'password3'
    },
    {
        username: 'user4',
        email: 'user4@gmail.com',
        password: 'password4'
    },
    {
        username: 'user5',
        email: 'user5@gmail.com',
        password: 'password5'
    },
];
// creating seed users
const seedUsers = () => User.bulkCreate(userData);
// exporting seed users
module.exports = seedUsers;