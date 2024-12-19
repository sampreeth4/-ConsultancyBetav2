import Header from '../components/Header'
import Services from '../components/services'
import AboutUs from '../components/aboutUs'
import Intersngrid from '../components/cards'
import Testimonials from '../components/testimonials'
const Homepage = () => {
  return (
    <div>
      <Header />
      <Services/>
      <AboutUs/>
      <Intersngrid/>
      <Testimonials/>
    </div>
  )
}

export default Homepage