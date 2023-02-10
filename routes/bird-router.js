const express = require("express");
const birdRouter = express.Router();

// define the home page route
birdRouter.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
birdRouter.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = birdRouter;
