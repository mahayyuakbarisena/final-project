const { landingPage, register, login } = require("../controllers/auth.controllers");
const router = require("express").Router();

router.get("/", landingPage);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
