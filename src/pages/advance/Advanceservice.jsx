import React from 'react'
import { MdOutlineDone } from 'react-icons/md'
import advance from "../../images/advance.svg"

function Advanceservice() {

    const advancedata = [
        {
            title: "Built for Developers",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            link: "Learn More",
        },
        {
            title: "Modern Design",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            link: "Learn More",
        },
        {
            title: "Build Stunning Websites",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            link: "Learn More",
        },
        {
            title: "Bring Ideas to Life",
            content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            link: "Learn More",
        },
    ]
    return (
        <>
            <section className='pad-tb-section' id='advance'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>Advantage of using our products</h2>
                            <div className="bar sec-bar"></div>
                            <p>Far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {
                            advancedata.map((elm, index) => {
                                return (
                                    <div className="col-lg-6" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <svg className="a1">
                                                    <rect x="2px" y="2px" rx="5px" ry="5px" width="100%" height="100%"></rect>
                                                </svg>
                                                <h5 className="card-title">{elm.title}</h5>
                                                <p className="card-text mb-3">{elm.content}</p>
                                                <a href="#" className="a-hover">{elm.link}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="pad-tb-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-center">
                            <img src={advance} alt="advance" className='advance-img' />
                        </div>
                        <div className="col-md-5">
                            <p className='mb-3 text-anim'>DIGITAL SERVICES</p>
                            <h2 className='mb-4 section-title'>A complete solution for your business website.</h2>
                            <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li className='d-flex mb-2'>
                                    <span className='me-2'><MdOutlineDone className='done-icon' /></span>
                                    <p>There live the blind texts</p>
                                </li>
                                <li className='d-flex'>
                                    <span className='me-2'><MdOutlineDone className='done-icon' /></span>
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

export default Advanceservice