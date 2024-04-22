// Import Components
import { Navbar, Footer, Cart } from "../../components/components";

const ViewCart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default ViewCart;
