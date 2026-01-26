import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
import UserList from "./components/userList";
import Counter from "./components/counter";
import Accordian from "./components/accordian";
import TicketSystem from "./components/ticketSystem";
import "./App.css";
//component
function App() {
  return (
    <div>
      <Header />
      <h1 className="heading">Welcome to My App!</h1>
      <UserList />
      <Counter />
      <Accordian />
      <TicketSystem />
      <Footer />
    </div>
  );
}
export default App;
