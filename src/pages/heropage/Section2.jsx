import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { Power2 } from 'gsap';


function Section2() {
    const data = [
        {
            count: "01",
            title: "Concept",
            content: "Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare.",
        },
        {
            count: "02",
            title: "Prepare",
            content: "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.",
        },
        {
            count: "03",
            title: "Retouch",
            content: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.",
        },
        {
            count: "04",
            title: "Finalize",
            content: "Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.",
        },
    ]
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {


        gsap.from(".section2-title", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.1,
            ease: Power2,
            scrollTrigger: {
                trigger: ".section2-title",
                start: "fromp 90%",
            },
        })
        gsap.from(".how-do-it .bar", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.2,
            ease: Power2,
            scrollTrigger: {
                trigger: ".how-do-it .bar",
                start: "top 90%",
            },
        })
        gsap.from(".section2-sub-title", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.3,
            ease: Power2,
            scrollTrigger: {
                trigger: ".section2-sub-title",
                start: "top 90%",
            },
        });
        let tl = gsap.timeline()
        tl.from(".how-do-it .stress", {
            opacity: 0,
            y: 50,
            duration: 2,
            delay: 0.4,
            ease: Power2,
            scrollTrigger: {
                trigger: ".how-do-it .stress",
                start: "top 90%",
                markers: true
            },
        }, "-=0.5");
    }, [])




    return (
        <section className='pad-tb-section how-do-it'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto section2-title'>How We Do It?</h2>
                        <div className="bar sec-bar"></div>
                        <p className='section2-sub-title'>We make your spending stress-free for you to have the perfect control.</p>
                    </div>
                </div>
                <div className="row gy-4 sect-2">
                    {
                        data.map((cuel, index) => {
                            return (
                                <div className="col-xl-3 col-md-6 stress" key={index} id="stress">
                                    <div className="card">
                                        <div className="card-body process card-border-ani">
                                            <svg className="border-statick">
                                                <rect x="1px" y="1px" rx="5px" ry="5px" width="100%" height="100%"></rect>
                                            </svg>
                                            <div id="p">
                                                <p className='process-count' >{cuel.count}</p>
                                            </div>
                                            <h4 className='process-title mb-3'>{cuel.title}</h4>
                                            <p className='process-content'>{cuel.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Section2