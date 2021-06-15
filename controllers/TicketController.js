class TicketController {
  GetLastOnes(req, res, next) {
    const io = req.app.get("socketio");
    res.json({ lastTickets: io.ticketlist.lastTickets });
  }
}
module.exports = TicketController;
