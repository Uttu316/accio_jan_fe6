import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="heading">Hello World</h1>
      <h2>Utkarsh Gupta</h2>
      <hr />
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <hr />
      <h2>Edutation</h2>
      <ul>
        <li>React</li>
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <hr />
      <h2>Expirence</h2>
      <ul>
        <li>React</li>
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <hr />
      <h2>Certificates</h2>
      <ul>
        <li>React</li>
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <hr />
      <h2>Achivement</h2>
      <ul>
        <li>React</li>
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <footer>Made with Love</footer>
    </>
  );
}

export default App;
