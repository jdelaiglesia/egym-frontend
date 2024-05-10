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


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Featured />
      <Products />
      <Footer />
    </div>
  );
};

export default ViewHome;
