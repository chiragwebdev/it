import React, { useEffect } from 'react'
import heroimage from '../../images/mainimage 1.svg'
import './hero.css'
import Section3 from './Section3'
import Ourteam from './Ourteam'
import Section2 from './Section2'
import Strategy from './Strategy'
import Soluction from './Soluction'
import Webcount from './Webcount'
import Features from './Features'
import Pricing from './Pricing'
import OurClient from './OurClient'
import { Power2, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Hero() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from(".tltle-anim", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.1,
            ease: Power2,
        })
        gsap.from(".h1-title", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.1,
            ease: Power2,
            scrollTrigger: {
                trigger: ".h1-title",
                start: "top 90%",
                // markers: {
                //     startColor: "yellow"
                // }
            },
        })
        gsap.from(".hero-title-contant", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.2,
            ease: Power2,
            scrollTrigger: {
                trigger: ".hero-title-contant",
                start: "top 90%",
            },
        })
        gsap.from(".hero-title-btn", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.3,
            ease: Power2,
            scrollTrigger: {
                trigger: ".hero-title-btn",
                start: "top 90%",
            },
        })
    }, [])



    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className='tb-pad'>
                        <div className="row text-align-center align-items-center">
                            <div className="col-md-5 mt-5 mt-md-0 order-1 order-md-0">
                                <h1 className='h1-title mb-3'>Grow Your Business with Our Solutions.</h1>
                                <p className='hero-title-contant'>We help our clients to increase their website traffic, rankings and visibility in search results.</p>
                                <div className='hero-title-btn'><div className="btn btn-text-white green-btn-color page-btn-hover ">Try For Free</div></div>
                            </div>
                            <div className="col-md-7 order-0 order-md-1 ">
                                <img src={heroimage} alt="heroimage" width="100%" className='tltle-anim' />
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
            <Features />
            <Pricing />
            <OurClient />
        </>
    )
}

export default Hero