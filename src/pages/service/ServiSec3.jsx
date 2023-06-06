import React from 'react'
import { BsFillClipboard2CheckFill } from 'react-icons/bs'
import { FaChartArea } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { MdPrivacyTip } from 'react-icons/md'
import ourservicebox from '../../images/our-service-box.webp'

function ServiSec3() {
    return (
        <section className="pad-tb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={ourservicebox} alt="solution" className='w-100' />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center order-1 order-lg-0">
                        <div className='col-12'>
                            <h2 className='mb-2 section-title mb-4'>What We Do?</h2>
                            <p className='mb-4'>The full service we are offering is specifically designed to meet your business needs and projects.</p>
                            <div className="row row-gap-4">
                                <div className="col-md-6 d-flex our-box-nth">
                                    <div>
                                        <div className=' me-3 ser-box-icon'><IoCall className='' /></div>
                                    </div>
                                    <div>
                                        <p className='service-box'>24/7 Support</p>
                                        <p>Nulla vitae elit libero pharetra augue dapibus.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex our-box-nth">
                                    <div>
                                        <div className=' me-3 ser-box-icon'><MdPrivacyTip className='' /></div>
                                    </div>
                                    <div>
                                        <p className='service-box'>Secure Payments</p>
                                        <p>Vivamus sagittis lacus augue laoreet vel.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex our-box-nth">
                                    <div>
                                        <div className=' me-3 ser-box-icon'><BsFillClipboard2CheckFill className='' /></div>
                                    </div>
                                    <div>
                                        <p className='service-box'>Daily Updates</p>
                                        <p>Cras mattis consectetur purus sit amet.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex our-box-nth">
                                    <div>
                                        <div className=' me-3 ser-box-icon'><FaChartArea className='' /></div>
                                    </div>
                                    <div>
                                        <p className='service-box'>Market Research</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ServiSec3