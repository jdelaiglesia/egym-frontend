// Import Components
import { Navbar, Footer, Login } from "../../components/components";

const ViewLogin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default ViewLogin;
