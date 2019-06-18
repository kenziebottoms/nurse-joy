const { Router } = require("express");
const router = Router();

router.use("/pokemon", require("./pokemon"));
router.use("/auth", require("./auth"));

// error handling
router.use((err, req, res, next) => {
  if (err) res.status(err.status || 500).json(err);
});

module.exports = router;
