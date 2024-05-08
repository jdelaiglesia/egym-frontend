import {
  NavbarDashboard,
  CreateProduct,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";

const ViewCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/dashboard/verify")
      .then((res) => setIsLoading(false))
      .catch((error) => {
        window.location.href = "/dashboard/login";
      });
  }, []);

  if (isLoading) {
  }

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
