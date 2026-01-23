const UserListHeader = (props) => {
  const { title } = props;
  return (
    <div className="userListHeader">
      <h2>{title}</h2>
    </div>
  );
};

export default UserListHeader;
