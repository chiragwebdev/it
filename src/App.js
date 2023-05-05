import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navabr from './component/navbar/Navabr';
import Register from './component/Register';
import Signin from './component/Signin';
import { ImBrightnessContrast } from 'react-icons/im'
import { MdDarkMode } from 'react-icons/md'
import { useState } from 'react';

function App() {
  const [dark, setdark] = useState(false)
  {
    if (dark === true) {
      document.body.setAttribute("data-bs-theme", "dark");
    } else
      document.body.setAttribute("data-bs-theme", "light");
  }
  return (
    <BrowserRouter>
      <div className='mode-btn'>
        {
          dark ? <Link className='mode-icon'><ImBrightnessContrast onClick={() => setdark(!dark)} /></Link>
            :
            <Link className='mode-icon'> <MdDarkMode onClick={() => setdark(!dark)} /></Link>
        }
      </div>
      <Navabr />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
