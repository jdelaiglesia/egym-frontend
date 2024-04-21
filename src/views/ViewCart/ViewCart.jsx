// Import Components
import { Navbar, Footer, Cart } from "../../components/components";

const ViewCart = () => {
    return (
        <>
            <Navbar />
            <div>
                <span className="text-white text-4xl font-bold">Carrito</span>
                <Cart />
            </div>
            <Footer />
        </>
    );
};

export default ViewCart;
