import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import CareersPage from "./pages/CareerPage";

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout><Homepage /></Layout>} />
      <Route path="/contact" element={<Layout><Contactpage/></Layout>} />
      <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
    </Routes>
  </Router>
  );
};

export default App;
