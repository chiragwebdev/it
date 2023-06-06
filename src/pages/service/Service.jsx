import React from 'react'
import './service.css'
import ServiceSec2 from './ServiceSec2'
import ourservice from '../../images/our-service.png'
import ServiSec3 from './ServiSec3'

function Service() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='tb-pad'>
                        <div className="row text-align-center align-items-center">
                            <div className="col-md-6 mt-5 mt-md-0">
                                <h2 className='section-title mb-3 advance-title'>Our Services</h2>
                                <p className='mb-3'>Our Services:
                                    We provide a wide range of services to cater to your needs. From web development and design to digital marketing and branding, our team is dedicated to delivering top-notch solutions. We specialize in creating user-friendly websites, optimizing search engine rankings, managing social media campaigns, and much more.
                                </p>
                                <p>With our expertise and experience, we ensure that your business receives the attention it deserves in the online world. Let us help you grow your brand, engage your audience, and achieve your goals. Contact us today to explore how our services can benefit your business.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="col-10 mx-auto">
                                    <img src={ourservice} alt="advance" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceSec2 />
            <ServiSec3 />
        </>
    )
}

export default Service