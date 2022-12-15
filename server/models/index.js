const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const Post = sequelize.define('Post', {
    name: Sequelize.STRING,
    text: Sequelize.STRING
});

const User = sequelize.define('User', {
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = { Post, User };