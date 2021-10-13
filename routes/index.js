const { home, search, category } = require('../controllers/home.controller')

var router = require("express").Router();
var appRouter = require("express").Router();

router.get("/home/:page", home);
router.get("/search/:page/", search);
router.get("/category/:category/:page/", category);

appRouter.use("/api", router);

module.exports = { appRouter };