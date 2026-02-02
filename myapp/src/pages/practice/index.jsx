import Footer from "../../components/footer";
import Header from "../../components/header";
import UserList from "../../components/userList";
import Counter from "../../components/counter";
import Accordian from "../../components/accordian";
import TicketSystem from "../../components/ticketSystem";
import Banner from "../../components/banner";
//component
function PracticePage() {
  return (
    <div>
      <Header title={"My App"} />
      <h1 className="heading">Welcome to My App!</h1>
      <UserList />
      <Counter />
      <Accordian />
      <TicketSystem />
      <Banner />
      <Footer />
    </div>
  );
}
export default PracticePage;
