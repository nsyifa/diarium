// Import any required services or models here
const services = require("../services/exampleService");

// Define your controller methods
exports.getUsers = async (req, res) => {
  try {
    const users = await services.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await services.createUser(data);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    // console.log(error);
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await services.getUserByEmail(email);

    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
