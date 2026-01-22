import logo from "../../assets/react.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="app_header">
      <div className="app_name_container">
        <img className="app_logo" src={logo} />
        <h1 className="app_name">My App</h1>
      </div>
      <nav className="navbar">
        <a>About</a>
        <a>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
