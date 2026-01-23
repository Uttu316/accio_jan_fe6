import { USER_DATA } from "../../data/userdata";
import UserCard from "./userCard";

const List = () => {
  return (
    <div className="userList">
      <p className="userListDescription">
        This is the list of rocking students of January 2026 Batch of Accio
      </p>

      <div className="list">
        {USER_DATA.map((user, index) => (
          <UserCard
            key={user.id || index}
            image={user.image}
            name={user.name}
            email={user.email}
            phone={user.phone}
            gender={user.gender}
          />
        ))}
      </div>
    </div>
  );
};
export default List;
