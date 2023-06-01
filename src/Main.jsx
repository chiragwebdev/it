import { Navigate, Route, Routes, } from 'react-router-dom';
import Advance from './pages/advance/Advance';
import Service from './pages/service/Service';
import Hero from './pages/heropage/Hero';
import Footer from './pages/heropage/Footer';


function Main() {
    return (
        <>
            <Routes data-scrollbar>
                <Route path="/" element={<Hero />} />
                <Route path="/advance" element={<Advance />} />
                <Route path="/service" element={<Service />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main
