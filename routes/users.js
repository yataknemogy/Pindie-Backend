const usersRouter = require("express").Router();
const checkAuth = require("../middlewares/auth");
const {
  hashPassword,
  findAllUsers,
  findUserById,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  updateUser,
  checkEmptyNameAndEmail,
  deleteUser,
} = require("../middlewares/users");

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDelete,
  sendMe,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
  "/users",
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
  "/users/:id",
  checkAuth,
  findUserById,
  deleteUser,
  sendUserDelete
);
module.exports = usersRouter;
