// Import Components
import { Navbar, Footer, Register } from "../../components/components";

const ViewRegister = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default ViewRegister;
