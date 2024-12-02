import React from 'react';
import Header from './components/header.jsx';
import Intro from './components/intro.jsx';
import Services from './components/services.jsx';
import AboutUs from './components/aboutUs.jsx';
import Testimonials from './components/testimonials.jsx';
import Footer from './components/footer.jsx';


const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App