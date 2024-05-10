// Import Components
import { Navbar, ProductDetail, Footer } from "../../components/components";

const ViewProductDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default ViewProductDetail;
