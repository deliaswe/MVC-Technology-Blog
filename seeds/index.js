// importing the seed data
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

// importing the connection to sequelize
const sequelize = require('../config/connection');

// creating the seed database
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

// running the seed database
seedAll();