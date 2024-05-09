// Import Components
import { Navbar, Footer, Login } from "../../components/components";

// Import Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ViewLogin = () => {
  const navigate = useNavigate();
  const { localAuth } = useAuth();
  useEffect(() => {
    if (localAuth.token) {
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
