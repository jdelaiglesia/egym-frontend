// Import Components
import {
  NavbarDashboard,
  EditProduct,
  Loader,
} from "../../components/components";

// Import Hooks
import { useEffect, useState } from "react";
import { axios } from "../../helpers/axios";

function ViewEditProduct() {
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
    <>
      <NavbarDashboard />
      {isLoading ? <Loader /> : <EditProduct />}
    </>
  );
}

export default ViewEditProduct;
