const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const Post = sequelize.define('Post', {
    postId: {type: Sequelize.INTEGER,
        autoIncrement: true, primaryKey:true},
    name: Sequelize.STRING,
    text: Sequelize.STRING,
});

const User = sequelize.define('User', {
    id: {type: Sequelize.INTEGER,
        autoIncrement: true, primaryKey:true},
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    password2: Sequelize.STRING
})

User.associate = models => {
  User.hasMany(models.Post, {
    foreignKey: 'posterId'
  });
}

Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'posterId'
    })
  }


module.exports = Post;
module.exports = User;