console.log("Sequelize version:", require('sequelize').version);
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // id column
        id: {
            // use the special Sequelize DataTypes object to define what type of data it is
            type: sequelize.INTEGER,
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
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
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