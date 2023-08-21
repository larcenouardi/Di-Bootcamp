const express = require("express");
const router = express.Router();
const { getInput, postInput } = require("../Controlers/api");

router.get("/hello", getInput);

router.post("/world", postInput);

module.exports = { router };