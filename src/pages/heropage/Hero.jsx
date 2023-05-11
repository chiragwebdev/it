import React from 'react'
import heroimage from '../../images/hero_image.svg'
import './hero.css'
import Section3 from './Section3'

function Hero() {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className='tb-pad'>
                        <div className="row align-items-center">
                            <div className="col-md-5 mt-5 mt-md-0 order-1 order-md-0">
                                <h1 className='h1-title mb-3'>Grow Your Business with Our Solutions.</h1>
                                <p>We help our clients to increase their website traffic, rankings and visibility in search results.</p>
                                <div className="btn btn-text-white btn-color page-btn-hover">Try For Free</div>
                            </div>
                            <div className="col-md-7 order-0 order-md-1">
                                <img src={heroimage} alt="hero_image" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pad-tb-section'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>How We Do It?</h2>
                            <p>We make your spending stress-free for you to have the perfect control.</p>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6 process">
                            <p className='process-count'>01</p>
                            <h4 className='process-title mb-2'>Concept</h4>
                            <p className='process-content'>Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 process">
                            <p className='process-count'>02</p>
                            <h4 className='process-title mb-2'>Prepare</h4>
                            <p className='process-content'>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 process">
                            <p className='process-count'>03</p>
                            <h4 className='process-title mb-2'>Retouch</h4>
                            <p className='process-content'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 process">
                            <p className='process-count'>04</p>
                            <h4 className='process-title mb-2'>Finalize</h4>
                            <p className='process-content'>Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Section3 />
        </>
    )
}

export default Hero