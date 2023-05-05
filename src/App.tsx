import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurBenefits from "./components/OurBenefits";
import ProductsCatalog from "./components/ProductsCatalog";

function App() {
  // const [scrollPosition, setScrollPosition] = React.useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="relative flex flex-col">
      <Header />
      <FirstSection />
      <div id="products">
        <ProductsCatalog />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="benefits">
        <OurBenefits />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
