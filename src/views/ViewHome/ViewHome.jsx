// Import Components
import {
  Navbar,
  Featured,
  Products,
  Footer,
} from "../../components/components";
import { ThemeProvider } from "../../context/theme";

const ViewHome = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Featured />
        <Products />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default ViewHome;
