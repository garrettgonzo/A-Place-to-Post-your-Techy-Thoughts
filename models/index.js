const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});
//add blog id column and check if its there anyTHING

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Blog, Comment };