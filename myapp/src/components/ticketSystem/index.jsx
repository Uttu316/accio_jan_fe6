import { useState } from "react";
import TicketForm from "./ticketform";
import TicketList from "./ticketlist";
import styles from "./ticketSystem.module.css";

const INITAL_TICKET_FORM = {
  title: "",
  description: "",
  status: "open",
};
const TicketSystem = () => {
  const [ticketForm, setTicketForm] = useState(INITAL_TICKET_FORM);

  const [tickets, setTickets] = useState([]);

  const [editIndex, setEditIndex] = useState(-1); // -1 means no edit in progress

  const onCreateTicket = (e) => {
    e.preventDefault();
    if (!ticketForm.title.trim()) return;
    const newTicket = {
      title: ticketForm.title,
      description: ticketForm.description,
      status: ticketForm.status,
      id: Date.now(),
    };
    setTickets([newTicket, ...tickets]); //adding new ticket on top of tickets array
    setTicketForm(INITAL_TICKET_FORM); //resetting the form
  };

  const onEditTicket = (ticket, index) => {
    setEditIndex(index);
    setTicketForm({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
    });
  };

  const onUpdateTicket = (e) => {
    e.preventDefault();
    if (editIndex === -1) return;

    setTickets((currTickets) => {
      currTickets[editIndex] = {
        ...currTickets[editIndex],
        ...ticketForm,
      };
      return currTickets;
    });

    setEditIndex(-1); //resetting edit index
    setTicketForm(INITAL_TICKET_FORM); //resetting the form
  };
  const onDeleteTicket = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ticket System</h2>
      <TicketForm
        ticketForm={ticketForm}
        setTicketForm={setTicketForm}
        onCreateTicket={onCreateTicket}
        editIndex={editIndex}
        onUpdateTicket={onUpdateTicket}
      />
      <TicketList
        onEdit={onEditTicket}
        tickets={tickets}
        onDelete={onDeleteTicket}
        editIndex={editIndex}
      />
    </div>
  );
};
export default TicketSystem;
