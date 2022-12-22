import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
