// Import Components
import {
  Navbar,
  Featured,
  Products,
  Footer,
} from "../../components/components";

import { useAuth } from "../../hooks/useAuth";

const ViewHome = () => {
  const { auth, setAuth } = useAuth();

  console.log(auth);
  return (
    <>
      <Navbar />
      <Featured />
      <Products />
      <Footer />
    </>
  );
};

export default ViewHome;
