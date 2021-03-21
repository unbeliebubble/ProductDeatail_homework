import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import NavigationBar from "../components/NavigationBar.js";

function Home() {
  return (
    <div className="bg-color">
      <div className="container grid-container">
        <Header />
        <NavigationBar />
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
