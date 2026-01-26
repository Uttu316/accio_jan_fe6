import styles from "./ticketSystem.module.css";

const TicketForm = ({
  ticketForm,
  editIndex,
  setTicketForm,
  onCreateTicket,
  onUpdateTicket,
}) => {
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setTicketForm({ ...ticketForm, [name]: value }); //updating the lastest value of the form
  };
  const isEditing = editIndex !== -1;

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">
          Title:
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter title of ticket..."
          id="title"
          value={ticketForm.title}
          name="title"
          onChange={handleInput}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">
          Description:
        </label>
        <textarea
          className={styles.textarea}
          rows={3}
          id="description"
          name="description"
          value={ticketForm.description}
          onChange={handleInput}
          placeholder="Write ticket description here..."
        ></textarea>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="status">
          Status:
        </label>
        <select
          className={styles.select}
          onChange={handleInput}
          value={ticketForm.status}
          id="status"
          name="status"
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      {!isEditing && (
        <button
          onClick={onCreateTicket}
          className={styles.submitBtn}
          type="submit"
        >
          Create Ticket
        </button>
      )}
      {isEditing && (
        <button
          onClick={onUpdateTicket}
          className={styles.submitBtn}
          type="submit"
        >
          Update Ticket
        </button>
      )}
    </form>
  );
};
export default TicketForm;
