// Import Components
import { Navbar, Products, Footer } from "../../components/components";

const ViewShop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default ViewShop;
