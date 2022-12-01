const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const Post = sequelize.define('Post', {
    name: Sequelize.STRING,
    text: Sequelize.STRING,
});

module.exports = Post;