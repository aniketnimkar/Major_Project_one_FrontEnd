import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FooterCards from "./components/FooterCards";
import ProductListing from "./pages/ProductListing";
import { fetchProducts } from "./features/filterSlice";

export default function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FooterCards />
      <Footer />
      {/* <ProductListing/> */}
    </main>
  );
}
