import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
