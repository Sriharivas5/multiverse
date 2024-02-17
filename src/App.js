import './App.css';
import Home from './pages/Home/Home';

import BlackHoles from './pages/BlackHoles/BlackHoles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMatter from './pages/DarkMatter/DarkMatter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/https://Sriharivas5.github.io/multiverse" element={<Home />} />
        <Route path="/blackhole" element={<BlackHoles />} />
        <Route path="/darkMatter" element={<DarkMatter />} />
      </Routes>

    </div>

  );
}

export default App;
