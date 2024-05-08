// Import Components
import {
  NavbarDashboard,
  AdminDashboard,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";

const ViewDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/dashboard/verify")
      .then((res) => setIsLoading(false))
      .catch((error) => {
        window.location.href = "/dashboard/login";
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
