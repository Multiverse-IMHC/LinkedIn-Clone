const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const Post = sequelize.define('Post', {
    postid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    name: Sequelize.STRING,
    text: Sequelize.STRING,
});

const User = sequelize.define('User', {
    userid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});


module.exports = {Post, User};