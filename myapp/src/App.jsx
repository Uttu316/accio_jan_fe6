import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
import UserList from "./components/userList";
import Counter from "./components/counter";
import Accordian from "./components/accordian";
//component
function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to My App!</h1>
      <UserList />
      <Counter />
      <Accordian />
      <Footer />
    </div>
  );
}
export default App;
