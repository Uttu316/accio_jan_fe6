import Footer from "../../components/footer";
import UserList from "../../components/userList";
import Counter from "../../components/counter";
import Accordian from "../../components/accordian";
import TicketSystem from "../../components/ticketSystem";
import Banner from "../../components/banner";
import PageWrapper from "../../components/pageWrapper";
//component
function PracticePage() {
  return (
    <PageWrapper title={"My App"}>
      <h1 className="heading">Welcome to My App!</h1>
      <UserList />
      <Counter />
      <Accordian />
      <TicketSystem />
      <Banner />
    </PageWrapper>
  );
}
export default PracticePage;
