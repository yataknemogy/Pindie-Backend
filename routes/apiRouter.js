const gamesRouter = require("./game");
const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const apiRouter = require("express").Router();
const authRouter = require("./auth");

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;
