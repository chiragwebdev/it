import React from 'react'
import heroimage from '../../images/mainimage 1.svg'
import './hero.css'
import Section3 from './Section3'
import Ourteam from './Ourteam'
import Section2 from './Section2'
import Strategy from './Strategy'
import Soluction from './Soluction'
import Webcount from './Webcount'

function Hero() {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className='tb-pad'>
                        <div className="row text-align-center align-items-center">
                            <div className="col-md-5 mt-5 mt-md-0 order-1 order-md-0">
                                <h1 className='h1-title mb-3'>Grow Your Business with Our Solutions.</h1>
                                <p>We help our clients to increase their website traffic, rankings and visibility in search results.</p>
                                <div className="btn btn-text-white green-btn-color page-btn-hover">Try For Free</div>
                            </div>
                            <div className="col-md-7 order-0 order-md-1">
                                <img src={heroimage} alt="heroimage" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Section2 />
            <Section3 />
            <Webcount />
            <Ourteam />
            <Strategy />
            <Soluction />
        </>
    )
}

export default Hero