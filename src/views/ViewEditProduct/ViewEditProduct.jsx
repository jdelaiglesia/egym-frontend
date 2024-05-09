// Import Components
import {
  NavbarDashboard,
  EditProduct,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function ViewEditProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { auth } = useAuth();
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
    <>
      <NavbarDashboard />
      {isLoading ? <Loader /> : <EditProduct />}
    </>
  );
}

export default ViewEditProduct;
