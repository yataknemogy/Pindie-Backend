const gamesRouter = require("express").Router();
const checkAuth = require("../middlewares/auth");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDelete,
} = require("../controllers/games");

const {
  findAllGames,
  findGameById,
  createGame,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
} = require("../middlewares/game");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete(
  "/games/:id",
  checkAuth,
  findGameById,
  deleteGame,
  sendGameDelete
);
module.exports = gamesRouter;
