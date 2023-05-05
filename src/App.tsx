import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import ProductsCatalog from "./components/ProductsCatalog";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <ProductsCatalog />
      <AboutUs />
      <OurBenefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
