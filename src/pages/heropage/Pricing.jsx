import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR PRICING</h2>
                        <div className="bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Enjoy a free 30-day trial and experience the full service. No credit card required!</p>
                    </div>
                </div>
                <div className="row row-gap-4">
                    <div className="col-lg-4 col-sm-8 mx-auto pricing" >
                        <div className="card h-100 ">
                            <div className="card-body text-center">
                                <p className='mb-3'>Basic Plan</p>
                                <h2 className='mb-5 section-title'>$15.00 <span>/Mon</span></h2>
                                <p className='mb-3'>5 Projects</p>
                                <p className='mb-3'>100K API Access</p>
                                <p className='mb-3'>200MB Storage</p>
                                <p className='mb-3'>Unlimited Users</p>
                                <p className='mb-3'>Unlimited Website</p>
                                <p className='mb-3'>Weekly Reports</p>
                                <p className='mb-5'>7/24 Support</p>
                                <Link className="btn btn-text-white green-btn-color m-0 pricing-btn" to="/">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-8 mx-auto pricing" >
                        <div className="card h-100 ">
                            <div className="card-body text-center">
                                <p className='mb-3'>Premium Plan</p>
                                <h2 className='mb-5 section-title'>$20.00 <span>/Mon</span></h2>
                                <p className='mb-3'>10 Projects</p>
                                <p className='mb-3'>200K API Access</p>
                                <p className='mb-3'>500MB Storage</p>
                                <p className='mb-3'>Unlimited Users</p>
                                <p className='mb-3'>Unlimited Website</p>
                                <p className='mb-3'>Weekly Reports</p>
                                <p className='mb-5'>7/24 Support</p>
                                <Link className="btn btn-text-white purple-btn-color m-0 pricing-btn" to="/">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-8 mx-auto mx-auto pricing" >
                        <div className="card h-100 ">
                            <div className="card-body text-center">
                                <p className='mb-3'>Corporate Plan</p>
                                <h2 className='mb-5 section-title'>$25.00 <span>/Mon</span></h2>
                                <p className='mb-3'>15 Projects</p>
                                <p className='mb-3'>300K API Access</p>
                                <p className='mb-3'>1000MB Storage</p>
                                <p className='mb-3'>Unlimited Users</p>
                                <p className='mb-3'>Unlimited Website</p>
                                <p className='mb-3'>Weekly Reports</p>
                                <p className='mb-5'>7/24 Support</p>
                                <Link className="btn btn-text-white green-btn-color m-0 pricing-btn" to="/">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing