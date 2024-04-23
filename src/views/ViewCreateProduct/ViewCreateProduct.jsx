import { Navbar, Footer, CreateProduct } from "../../components/components";

const ViewCreateProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <CreateProduct />
      </div>
      <Footer />
    </>
  );
};

export default ViewCreateProduct;
