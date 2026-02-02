import logo from "../../assets/react.svg";
import "./header.css";
import { Link, NavLink } from "react-router";

const Header = ({ title }) => {
  return (
    <header className="app_header">
      <div className="app_name_container">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img className="app_logo" src={logo} alt="logo" />
          <h1 className="app_name">{title || "E-Shop"}</h1>
        </Link>
      </div>
      <nav className="navbar">
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
