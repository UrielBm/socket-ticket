const Ticket = require("./Ticket");
class TicketList {
  constructor() {
    this.lastnumber = 0;
    this.pendientes = [];
    this.asignados = [];
  }
  get SiguienteNumero() {
    this.lastnumber++;
    return this.lastnumber;
  }
  get lastTickets() {
    return this.asignados.slice(0, 13);
  }
  createTicket() {
    const newTicket = new Ticket(this.SiguienteNumero);
    this.pendientes = [...this.pendientes, newTicket];
    return newTicket;
  }
  asignarTicket(agente, escritorio) {
    if (this.pendientes.length === 0) {
      return null;
    }
    const siguienteTicket = this.pendientes.shift();
    siguienteTicket.agente = agente;
    siguienteTicket.escritorio = escritorio;
    this.asignados = [siguienteTicket, ...this.asignados];
    return siguienteTicket;
  }
}
module.exports = TicketList;
