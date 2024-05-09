// Import Components
import {
  NavbarDashboard,
  AdminDashboard,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ViewDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    axios
      .get("/dashboard/verify", {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((res) => setIsLoading(false))
      .catch((error) => {
        navigate("/dashboard/login");
      });
  }, []);
  return (
    <div className="flex flex-col justify-between">
      <NavbarDashboard />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen">
          <AdminDashboard />
        </div>
      )}
    </div>
  );
};

export default ViewDashboard;
