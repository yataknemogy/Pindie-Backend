const categoriesRouter = require("express").Router();
const checkAuth = require("../middlewares/auth");
const {
  findAllCategories,
  checkIsCategoryExists,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  checkEmptyName,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryUpdated,
  sendCategoryDelete,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);

categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  findCategoryById,
  deleteCategory,
  sendCategoryDelete
);
module.exports = categoriesRouter;
