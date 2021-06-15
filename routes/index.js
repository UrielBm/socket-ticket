const express = require("express");
const router = express.Router();
const TicketController = require("./../controllers/TicketController");
const IntanceTicketController = new TicketController();
/* GET home page. */
router.get("/lastones", (req, res, next) => {
  IntanceTicketController.GetLastOnes(req, res, next);
});
router.get("/", function (req, res, next) {
  res.send("hola, soy el backend de socket ticket");
});

module.exports = router;
