// Import Components
import { Navbar, Footer, Login} from "../../components/components";


const ViewLogin = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default ViewLogin;
