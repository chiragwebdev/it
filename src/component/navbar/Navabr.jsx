import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { BsCaretDownFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { showmenu, hidemenu } from '../../redux/menuslice'

function Navabr() {
    const { showing } = useSelector((state) => state.menuslice)
    const dispatch = useDispatch()
    const [onmenushow, setonmenushow] = useState(false)
    const dropmenushow = () => {
        var ww = window.innerWidth
        if (ww < 992) {
            setonmenushow(!onmenushow)
        }
    }
    const handlehidemenu = () => {
        dispatch(hidemenu());
        setonmenushow(false)
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar-head">
                        <div className={`overlaynone ${showing ? "overlay" : ""}`} onClick={handlehidemenu}></div>
                        <Link to="/" className="logo">LOGO</Link>
                        <nav className={`nav-list ${showing ? "nav-list-show" : ""}`}>
                            <ul className='nav-item'>
                                <li onClick={() => dispatch(hidemenu())} ><CgClose className='menu-icon close-icon' /></li>
                                <li onClick={handlehidemenu} ><Link to="/" className="nav-item-name" >Home</Link></li>
                                <li className='position-relative drophover' onClick={dropmenushow}><Link className="nav-item-name" >Dropdown <BsCaretDownFill className={`${onmenushow ? "flip-icon" : ""}`} /></Link>
                                    <ul className={`dropdown-list ${onmenushow ? "dropdown-list-onshow" : ""}`}>
                                        <li onClick={() => dispatch(hidemenu())} >
                                            <Link to="/testimonials" className="nav-item-name" >Testimonials</Link>
                                        </li>
                                        <li onClick={() => dispatch(hidemenu())} >
                                            <Link to="/elements" className="nav-item-name" >Elements</Link>
                                        </li>
                                        <li onClick={() => dispatch(hidemenu())} >
                                            <Link to="/" className="nav-item-name" >Menu Two</Link>
                                        </li>
                                        <li onClick={() => dispatch(hidemenu())} >
                                            <Link to="/" className="nav-item-name" >Menu Three</Link>
                                        </li>
                                    </ul></li>
                                <li onClick={handlehidemenu} ><Link to="/feature" className="nav-item-name" >Feature</Link></li>
                                <li onClick={handlehidemenu} ><Link to="/pricing" className="nav-item-name" >Pricing</Link></li>
                                <li onClick={handlehidemenu} ><Link to="/about" className="nav-item-name" >About</Link></li>
                                <li onClick={handlehidemenu} ><Link to="/contact" className="nav-item-name" >Contact</Link></li>
                                <div className='show-signin'>
                                    <li className="nav-item-name"><Link to="/signin" onClick={handlehidemenu} className="btn btn-color-border w-100">Sign in</Link></li>
                                    <li className="nav-item-name"><Link to="/register" onClick={handlehidemenu} className="btn btn-text-white btn-color w-100">Register</Link></li>
                                </div>

                            </ul>
                        </nav>
                        <div className='header-btn'>
                            <div className='hide-signin'>
                                <Link to="/signin" className="btn btn-color-border">Sign in</Link>
                                <Link to="/register" className="btn btn-text-white btn-color">Register</Link>
                            </div>
                            <div className='menu-icon burger-menu' onClick={() => dispatch(showmenu())}><CgMenuRightAlt /></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navabr