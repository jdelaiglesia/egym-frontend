// Import Components
import { Navbar, Profile, Footer } from "../../components/components";

// Import Hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { axios } from "../../helpers/axios";

const ViewProfile = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    axios
      .get("/auth/token", {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((res) => {
        return;
      })
      .catch((e) => navigate("/login"));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default ViewProfile;
