import React from 'react';
import Header from "./components/header.jsx";
import Services from "./components/services.jsx";
import AboutUs from "./components/aboutUs.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";
import Nav from "./components/nav.jsx";

const App = () => {

  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
