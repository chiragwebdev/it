import React from 'react'
import { GoCheck } from 'react-icons/go'
import solution from '../../images/solution.svg'

function Soluction() {
    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR SOLUTIONS</h2>
                        <div className="bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center order-1 order-lg-0">
                        <div className='col-12'>
                            <h2 className='mb-2 section-title mb-4'>We make your spending stress-free for you to have the perfect control.</h2>
                            <p className='mb-4'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.</p>
                            <div className="row row-gap-4">
                                <div className="col-md-6 d-flex">
                                    <div>
                                        <div className='check-icon me-3'><GoCheck /></div>
                                    </div>
                                    <p>Aenean quam ornare. Curabitur blandit.</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div>
                                        <div className='check-icon me-3'><GoCheck /></div>
                                    </div>
                                    <p>Etiam porta euismod malesuada mollis.</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div>
                                        <div className='check-icon me-3'><GoCheck /></div>
                                    </div>
                                    <p>Nullam quis risus eget urna mollis ornare.</p>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div>
                                        <div className='check-icon me-3'><GoCheck /></div>
                                    </div>
                                    <p>Vivamus sagittis lacus vel augue rutrum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <img src={solution} alt="solution" className='w-100' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Soluction