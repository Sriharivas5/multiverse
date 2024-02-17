import './App.css';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Types from './pages/Types/Types';
import Names from './pages/Names/Names';
import Slider from './pages/Slider/Slider';
import BlackHoles from './pages/BlackHoles/BlackHoles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMatter from './pages/DarkMatter/DarkMatter';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/multiverse" element={<Home />} />
        <Route path="/blackhole" element={<BlackHoles />} />
        <Route path="/darkMatter" element={<DarkMatter />} />
      </Routes>

    </div>

  );
}

export default App;
