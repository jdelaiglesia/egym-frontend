// Import Components
import { LoginDashboard, NavbarDashboard } from "../../components/components";

const ViewDashboardLogin = () => {
  return (
    <div className="flex flex-col justify-between">
      <NavbarDashboard />
      <LoginDashboard />
    </div>
  );
};

export default ViewDashboardLogin;
