const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth");

pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;
