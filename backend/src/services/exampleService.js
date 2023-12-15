// Import any required models here
const Example = require("../models/user");

// Define your service methods
exports.getExamples = async () => {
  const examples = await Example.find();

  return examples;
};

exports.createExample = async (name) => {
  const example = new Example({ name: name });
  return await example.save();
};
