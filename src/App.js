import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Navabr from './component/navbar/Navabr';
import Register from './component/Register';
import Signin from './component/Signin';
import { Link } from 'react-router-dom'
import { ImBrightnessContrast } from 'react-icons/im'
import { MdDarkMode } from 'react-icons/md'
import { useEffect, useState } from 'react';
import ScrollToTop from './ScrolltoTop';
import Main from './Main';


function App() {

  const [dark, setdark] = useState(false)

  if (dark === false) {
    document.body.setAttribute("data-bs-theme", "dark");
    document.documentElement.setAttribute("style", "color-scheme: dark");
  } else{
  document.body.setAttribute("data-bs-theme", "light");
  document.documentElement.setAttribute("style", "color-scheme: light");}

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);

  }, []);


  return (
    <BrowserRouter basename=''>
      {/* <div id='stater'></div> */}
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
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="*" element={<Main />} />
           
          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
