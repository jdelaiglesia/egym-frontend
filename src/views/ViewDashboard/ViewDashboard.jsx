import { Navbar, AdminDashboard, Footer } from "../../components/components";

const ViewDashboard = () => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="h-screen">
        <Navbar />
        <AdminDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default ViewDashboard;
