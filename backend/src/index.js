const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(config.mongodb_uri);
  console.log("Connected to database");
}

// Define your routes here
const routes = require("./routes/routes");
app.use("/api/example", routes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on  localhost:${config.port}`);
});
