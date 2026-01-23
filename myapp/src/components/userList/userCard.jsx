import { FaMale as MaleIcon, FaFemale as FemaleIcon } from "react-icons/fa";

const UserCard = (props) => {
  const { image, name, email, phone, gender } = props;
  return (
    <div>
      <img src={image} alt={name} style={{ borderRadius: "50%" }} />
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        Gender: {gender} {gender === "male" ? <MaleIcon /> : <FemaleIcon />}
      </p>
    </div>
  );
};
export default UserCard;
