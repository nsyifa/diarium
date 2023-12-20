// Import any required models here
const User = require("../models/user");

// Define your service methods
exports.getUsers = async () => {
  const users = await User.find();

  return users;
};

exports.createUser = async (data) => {
  console.log(data);
  const user = new User(data);
  console.log(user);
  return await user.save();
};

exports.getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
