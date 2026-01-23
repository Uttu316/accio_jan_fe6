import List from "./list";
import UserListHeader from "./userlistHeader";
import "./userList.css";
const UserList = () => {
  return (
    <>
      <UserListHeader title="Rocking List" />
      <List />
    </>
  );
};

export default UserList;
