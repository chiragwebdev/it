import { Navigate, Route, Routes, } from 'react-router-dom';
import Advance from './pages/advance/Advance';
import Service from './pages/service/Service';
import Hero from './pages/heropage/Hero';
import Footer from './component/Footer';


function Main() {
    return (
        <>
            <Routes data-scrollbar>
                <Route path="growyourbusiness.netlify.app" element={<Hero />} />
                <Route path="growyourbusiness.netlify.app/advance" element={<Advance />} />
                <Route path="growyourbusiness.netlify.app/service" element={<Service />} />
                <Route path="*" element={<Navigate to="growyourbusiness.netlify.app" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main
