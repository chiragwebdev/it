import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import './App.css';
import Navabr from './component/navbar/Navabr';
import Register from './component/Register';
import Signin from './component/Signin';
import Advance from './pages/advance/Advance';
import Service from './pages/service/Service.jsx';
import { Link } from 'react-router-dom'
import { ImBrightnessContrast } from 'react-icons/im'
import { MdDarkMode } from 'react-icons/md'
import { useEffect, useState } from 'react';
import Hero from './pages/heropage/Hero';
import ScrollToTop from './ScrolltoTop';
import Footer from './pages/heropage/Footer';


function App() {

  const [dark, setdark] = useState(false)

  if (dark === false) {
    document.body.setAttribute("data-bs-theme", "dark");
  } else
    document.body.setAttribute("data-bs-theme", "light");

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);

  }, []);


  return (
    <BrowserRouter>
      <div id='stater'></div>
      {isLoading ? (
        <>
          <ScrollToTop />
        </>
      ) :
        <>
          <Navabr />
          <div className='mode-btn'>
            {
              dark ? <Link className='mode-icon'><ImBrightnessContrast onClick={() => setdark(!dark)} /></Link>
                :
                <Link className='mode-icon'> <MdDarkMode onClick={() => setdark(!dark)} /></Link>
            }
          </div>
          <Routes data-scrollbar>
            <Route path="/" element={<Hero />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/advance" element={<Advance />} />
            <Route path="/service" element={<Service />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      }
    </BrowserRouter>
  );
}

export default App;
