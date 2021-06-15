const TicketList = require("../models/Ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketlist = new TicketList();
    this.SocketsEvents();
  }
  SocketsEvents() {
    this.io.on("connection", (socket) => {
      console.log("nuevo cliente conectado");
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketlist.createTicket();
        callback(nuevoTicket);
      });
      socket.on("siguiente-ticket", ({ agente, escritorio }, callback) => {
        const siguienteTicket = this.ticketlist.asignarTicket(
          agente,
          escritorio
        );
        callback(siguienteTicket);
        this.io.emit("ticket-asignado", this.ticketlist.lastTickets);
      });
    });
  }
}
module.exports = Sockets;
