import { MdDelete as DeleteIcon, MdEdit as EditIcon } from "react-icons/md";
import styles from "./ticketSystem.module.css";

const TicketItem = ({ ticket, index, editIndex, onDelete, onEdit }) => {
  const isCurrentEditing = editIndex === index;
  return (
    <div
      className={`${styles.ticketCard} ${styles[`status-${ticket.status}`]} ${isCurrentEditing ? styles.isEditing : ""} `}
    >
      <h3 className={styles.ticketTitle}>{ticket.title}</h3>
      <p className={styles.ticketDesc}>{ticket.description}</p>
      <div className={styles.ticketContentWrapper}>
        <span
          className={`${styles.statusBadge} ${styles[`status-${ticket.status}`]}`}
        >
          {ticket.status}
        </span>
        <div className={styles.ticketActions}>
          <button
            onClick={() => onEdit(ticket, index)}
            className={styles.editBtn}
            disabled={editIndex !== -1} //disable edit button when edit is in progress
          >
            <EditIcon />
          </button>
          <button
            disabled={editIndex !== -1} //disable delete button when edit is in progress
            onClick={() => onDelete(ticket.id)}
            className={styles.deleteBtn}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TicketItem;
