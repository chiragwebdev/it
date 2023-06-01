import React from 'react'
import './advance.css'
import Advanceservice from './Advanceservice'
import advance from "../../images/advance.svg"
import AdvSec2 from './AdvSec2'

function Advance() {
    return (
        <>
            <section className='hero-section'>
                <div className="container">
                    <div className='tb-pad'>
                        <div className="row text-align-center align-items-center">
                            <div className="col-md-6 order-1 order-md-0 ">
                                <img src={advance} alt="advance" width="100%"  />
                            </div>
                            <div className="col-md-6 mt-5 mt-md-0 order-0 order-md-1">
                                <h2 className='section-title mb-3 advance-title'>Creative. Smart. Awesome.</h2>
                                <p >We are an award winning web & mobile design agency that strongly believes in the power of creative ideas. These words perfectly describe our exceptional team dedicated to delivering innovative solutions and outstanding results for our clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Advanceservice />
            <AdvSec2 />
        </>
    )
}

export default Advance