import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
import Posts from "./features/Posts/Posts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Elipson from "./features/pages/work/Elipson";
import DentalClinic from "./features/pages/work/DentalClinic";
import Encyclopedia from "./features/pages/invents/Encyclopedia";
import GameRoom from "./features/pages/invents/GameRoom";
import BlogNews from "./features/pages/apis/BlogNews";
import Recipe from "./features/pages/apis/Recipe";
import About from "./features/about/about";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="site-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/works/elipson" element={<Elipson />} />
            <Route path="/works/dentalclinic" element={<DentalClinic />} />
            <Route path="/works/encyclopedia" element={<Encyclopedia />} />
            <Route path="/works/gameroom" element={<GameRoom />} />
            <Route path="/works/blognews" element={<BlogNews />} />
            <Route path="/works/recipe" element={<Recipe />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
