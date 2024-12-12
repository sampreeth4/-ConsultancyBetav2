import React from 'react';
import Header from "./components/header.jsx";
import Services from "./components/services.jsx";
import AboutUs from "./components/aboutUs.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";
import Nav from "./components/nav.jsx";
import InternsGrid from './components/cards.jsx';

const App = () => {

  return (
    <div>
      <Nav />
      <Header />
      <Services />
      <AboutUs />
      <InternsGrid/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
