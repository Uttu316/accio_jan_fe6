import TicketItem from "./ticketItem";
import styles from "./ticketSystem.module.css";

const TicketList = ({ tickets, editIndex, onDelete, onEdit }) => {
  const isEmpty = tickets.length === 0;
  return (
    <div>
      <h2 className={styles.listHeading}>Ticket List</h2>

      {isEmpty && <p className={styles.emptyMessage}>No tickets available.</p>}

      {!isEmpty && (
        <div className={styles.ticketList}>
          {tickets.map((ticket, index) => (
            <TicketItem
              onEdit={onEdit}
              editIndex={editIndex}
              key={ticket.id}
              index={index}
              ticket={ticket}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TicketList;
