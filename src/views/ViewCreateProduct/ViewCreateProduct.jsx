import {
  NavbarDashboard,
  CreateProduct,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ViewCreateProduct = () => {
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
    <>
      <NavbarDashboard />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <CreateProduct />
        </div>
      )}
    </>
  );
};

export default ViewCreateProduct;
