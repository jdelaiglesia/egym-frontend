// Import Components
import {
  Navbar,
  Featured,
  Products,
  Footer,
} from "../../components/components";
//import test
import Reduxtest from "../../components/Reduxtest";

const ViewHome = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Products />
      <Reduxtest />
      <Footer />
    </>
  );
};

export default ViewHome;
