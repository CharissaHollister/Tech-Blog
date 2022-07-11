// const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");
const Comment = require("./Comment");
const Post = require("./Post");

// create association user to post one to many
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//votes and users to posts associations many to many
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

//comment associations
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote, Comment };
