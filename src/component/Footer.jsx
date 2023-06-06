import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { HiLocationMarker } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer' >
            <div className="container">
                <div className="row align-items-center row-gap-4">
                    <div className="col-lg-6 col-md-8 ">
                        <h2 className='section-title'>Join our community by using our services and grow your business.</h2>
                    </div>
                    <div className="col text-md-end ">
                        <div className="btn btn-text-white green-btn-color page-btn-hover ">Try For Free</div>
                    </div>
                </div>
                <div className='footer-line-border'></div>
                <div className="row row-gap-4">
                    <div className="col-lg-3 col-sm-6">
                        <h4 className='mb-3'>LOGO</h4>
                        <p className='p-font14'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <h4 className='mb-3  mt-4'>Follow Us</h4>
                        <div className='d-flex'>
                            <Link to="" className='social-icon'><FaFacebookF /></Link>
                            <Link to="" className='social-icon'><FaTwitter /></Link>
                            <Link to="" className='social-icon'><GrInstagram /> </Link>
                            <Link to="" className='social-icon'><FaLinkedinIn /></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className='mb-3'>Company</h4>
                        <ul>
                            <li className='mb-2'><Link to="" className='p-font14'>Services</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Career</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Pricing</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>About</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className='mb-3'>Support</h4>
                        <ul>
                            <li className='mb-2'><Link to="" className='p-font14'>FAQ's</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Privacy Policy</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Terms & Conditioncing</Link></li>
                            <li className='mb-2'><Link to="" className='p-font14'>Support Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <h4 className='mb-3'>Get in Touch</h4>
                        <div className='d-flex align-items-center mb-3'>
                            <div><HiLocationMarker className='me-2 icon-details' /></div><p className='p-font14'> Moonshine St. 14/05 Light City, London, United Kingdom</p>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <MdEmail className='me-2 icon-details' /><p className='p-font14'> info@email.com</p>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <IoCall className='me-2 icon-details' /><p className='p-font14'> 00 (123) 456 78 90</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer