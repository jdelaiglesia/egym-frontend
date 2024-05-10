import {
  NavbarDashboard,
  CreateCategory,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";
import { useNavigate } from "react-router-dom";

const ViewCreateCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : { token: "Unknown" };

  useEffect(() => {
    axios
      .get("/dashboard/verify", {
        headers: { Authorization: `Bearer ${localUser.token}` },
      })
      .then((res) => setIsLoading(false))
      .catch((error) => {
        navigate("/dashboard/login");
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <NavbarDashboard />
      {isLoading ? <Loader /> : <CreateCategory />}
    </div>
  );
};

export default ViewCreateCategory;
