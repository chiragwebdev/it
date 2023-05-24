import React from 'react'
import { Link } from 'react-router-dom'

function Strategy() {
    return (
        <section className='strategy-section pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR STRATEGY</h2>
                        <div className="bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center order-lg-0 order-1">
                        <div className='col-12'>
                            <h2 className='mb-2 section-title mb-4'>Here are 3 working steps to organize our business projects.</h2>
                            <p className='mb-4'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.</p>
                            <p className='mb-4'>Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <Link className='btn btn-text-white green-btn-color m-0'>Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 strategy order-lg-1 order-0">
                        <div className="card mb-4">
                            <div className="card-body d-flex">
                                <div><p className='str-count '>1</p></div>
                                <div>
                                    <h4 className='str-title mb-2 section-title'>Collect Ideas</h4>
                                    <p className='str-content'>Nulla vitae elit libero pharetra augue dapibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body d-flex">
                                <div><p className='str-count '>2</p></div>
                                <div>
                                    <h4 className='str-title mb-2 section-title'>Data Analysis</h4>
                                    <p className='str-content'>Data Analysis
                                        Vivamus sagittis lacus vel augue laoreet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body d-flex">
                                <div><p className='str-count '>3</p></div>
                                <div>
                                    <h4 className='str-title mb-2 section-title'>Finalize Product</h4>
                                    <p className='str-content'>Cras mattis consectetur purus sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy