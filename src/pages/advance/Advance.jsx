import React from 'react'
import './advance.css'
import { MdOutlineDone } from 'react-icons/md'
import business from '../../images/business.webp'

function Advance() {
    return (
        <>
            <section className='pad-tb-section' id='advance'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>Advantage of using our products</h2>
                            <p>Far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Built for Developers</h5>
                                    <p className="card-text mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <a href="#" className="a-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Modern Design</h5>
                                    <p className="card-text mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <a href="#" className="a-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Build Stunning Websites</h5>
                                    <p className="card-text mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <a href="#" className="a-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Bring Ideas to Life</h5>
                                    <p className="card-text mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <a href="#" className="a-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-center">
                            <img src={business} alt="business" />
                        </div>
                        <div className="col-md-5">
                            <p className='title-color'>DIGITAL SERVICES</p>
                            <h2 className='mb-4 section-title'>A complete solution for your business website.</h2>
                            <p className='mb-2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li className='d-flex'>
                                    <span className='me-2'><MdOutlineDone className='done-icon'/></span>
                                    <p>There live the blind texts</p>
                                </li>
                                <li className='d-flex'>
                                    <span className='me-2'><MdOutlineDone className='done-icon'/></span>
                                    <p>Far far away behind the word</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advance