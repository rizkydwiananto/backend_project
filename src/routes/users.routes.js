const { Router } = require("express");
const router = Router();

const { UserControllers } = require("../controllers");

router.get("/users", UserControllers.getData);

module.exports = router;
