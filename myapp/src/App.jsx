import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
//component
function App() {
  let fname = "Utkarsh";
  let lname = "Gupta";

  function getAge() {
    return 4 * 20;
  }

  const isAdult = false;

  const user = {
    name: "Abc",
    city: "xyz",
  };

  return (
    <div>
      <Header />
      <h1>Welcome to My App!</h1>
      <h2>{fname + " " + lname}</h2>
      <h3>Age: {getAge()}</h3>
      {isAdult ? <h3>Adult User</h3> : <h3>Minor User</h3>}
      {[<p>1</p>, <p>2</p>, <p>3</p>]}
      <h3>User Info:</h3>
      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>
      <Footer />
    </div>
  );
}
export default App;
