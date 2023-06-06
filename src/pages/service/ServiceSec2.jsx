import React from 'react'
import serach from '../../images/search.png'
import marketing from '../../images/marketing.png'
import social from '../../images/social.png'
import web from '../../images/web.png'
import { Link } from 'react-router-dom'

function ServiceSec2() {
  return (
      <section className='pad-tb-section' id='service'>
          <div className="container">
              <div className="row">
                  <div className="col text-center mb-5">
                      <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>The service we offer is specifically designed to meet your needs.</h2>
                  </div>
              </div>
              <div className="row row-gap-4 services-card">
                  <div className="col-xl-3 col-md-6 ">
                      <div className="card">
                          <div className="card-body text-center">
                              <img src={serach} alt="serach" className='img-width mb-3' />
                              <h5 className="card-title mb-3">SEO Services</h5>
                              <p className="card-text mb-4">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                              <div className='d-inline-flex page-btn-hover'><Link to="#" className="more-btn card-link">Learn More</Link></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-md-6 ">
                      <div className="card">
                          <div className="card-body text-center">
                              <img src={web} alt="web" className='img-width mb-3' />
                              <h5 className="card-title mb-3">Web Design</h5>
                              <p className="card-text mb-4">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                              <div className='d-inline-flex page-btn-hover'><Link to="#" className="more-btn card-link">Learn More</Link></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-md-6 ">
                      <div className="card">
                          <div className="card-body text-center">
                              <img src={social} alt="social" className='img-width mb-3' />
                              <h5 className="card-title mb-3">Social Engagement</h5>
                              <p className="card-text mb-4">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                              <div className='d-inline-flex page-btn-hover'><Link to="#" className="more-btn card-link">Learn More</Link></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-md-6 ">
                      <div className="card">
                          <div className="card-body text-center">
                              <img src={marketing} alt="marketing" className='img-width mb-3' />
                              <h5 className="card-title mb-3">Content Marketing</h5>
                              <p className="card-text mb-4">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                              <div className='d-inline-flex page-btn-hover'><Link to="#" className="more-btn card-link">Learn More</Link></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default ServiceSec2