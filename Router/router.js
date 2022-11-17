const router = require("express").Router();
const controller = require("../Controller/spellChecker");

router.post("/set", controller.spellCheck);

module.exports = router;
