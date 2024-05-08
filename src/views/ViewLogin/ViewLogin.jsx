// Import Components
import { Navbar, Footer, Login } from "../../components/components";

// Import Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser?.token) {
      navigate("/");
    } else {
      null;
    }
  }, []);
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
