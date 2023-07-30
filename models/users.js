console.log("Sequelize version:", require('sequelize').version);
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {
    checkPassword(loginPw) {
        return bcryptjs.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // id column
        id: {
            // use the special Sequelize DataTypes object to define what type of data it is
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        unique: true,
        },
        // email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
        },
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
        },
        },
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUser) {
                newUser.password = await bcryptjs.hash(newUser.password, 10);
        return newUser;
        },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
        return updatedUser;
        },
        },
        // pass in our imported sequelize
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;