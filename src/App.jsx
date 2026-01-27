import { Features } from "tailwindcss";
import NavBar from "./Components/NavBar";
import Benefits from "./Sections/Benefits/Benefits";
import Hero from "./Sections/Hero/Hero";
import Featurees from "./Sections/Features/Featurees";
import Specifications from "./Sections/Specifications/Specifications";
import Testimonial from "./Sections/Testimonial/Testimonial";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Benefits />
      <Featurees />
      <Specifications />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
