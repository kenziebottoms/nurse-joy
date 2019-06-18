const { Router } = require("express");
const router = Router();

const { getAuthUser, register, login, logout } = require("../services/auth");

router.get("/", getAuthUser);

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
