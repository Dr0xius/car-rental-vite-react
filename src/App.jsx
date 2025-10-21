import Nav from "./components/Nav";
import Features from "./components/Features";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Models from "./pages/Models.jsx";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
