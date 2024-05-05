import { Navbar, SaleDetail ,Footer } from "../../components/components"

function ViewSaleDetail() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
        <SaleDetail />
      <Footer />
    </div>
  )
}

export default ViewSaleDetail