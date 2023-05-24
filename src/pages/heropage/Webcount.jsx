import React, { useEffect, useRef, useState } from 'react'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css';

function Webcount() {
    const [count, setcount] = useState({
        count1: "",
        count2: "",
        count3: "",
        count4: "",
    })
 

    const myComponentRef = useRef();

    useEffect(() => {
        const myComponentview = new IntersectionObserver((entries) => {
            // const enter = entries[0]
            // console.log(enter)
            // const visibledata = enter.isIntersecting
            if (entries[0].isIntersecting) {
                setcount({
                    count1: "180",
                    count2: "20",
                    count3: "500",
                    count4: "70",
                })
            }
           
        })
        myComponentview.observe(myComponentRef.current)

    }, []);


    return (
        <section className='strategy-section pad-tb-section' >
            <div className="container">
                <div className="row" id="myComponent" >
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>We Always Try To Understand Users Expectation</h2>
                        <div className="bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row gy-5" ref={myComponentRef}>
                    <div className="col-md-3 col-6 text-center">
                        <h2 className='mb-2 count-number-text'><Odometer duration="500" value={count.count1} />K</h2>
                        <p className=''>Downloaded</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <h2 className='mb-2 count-number-text'> <Odometer duration="500" value={count.count2} />K</h2>
                        <p className=''>Feedback</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <h2 className='mb-2 count-number-text'> <Odometer duration="500" value={count.count3} />K</h2>
                        <p className=''>Workers</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                        <h2 className='mb-2 count-number-text'> <Odometer duration="500" value={count.count4} />K</h2>
                        <p className=''>Contributors</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Webcount