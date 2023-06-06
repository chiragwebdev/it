import React from 'react'
import designteam from '../../images/Design team-amico.svg'


function Section3() {

    return (
        <section className='pad-tb-section sec-2' id="collaps-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" >
                        <img id="designteamimg" src={designteam} alt="designteam" className='w-100' />
                    </div>
                    <div className="col-lg-6 d-align-class">
                        <div className=''>
                            <p className='mb-3' id="text-anim">WHY CHOOSE US?</p>
                            <h2 className='mb-2 section-title' >We bring solutions to make life easier for our clients.</h2>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item border-0 py-3">
                                    <h2 className="accordion-header accordion-header-1 d-flex">
                                        <button className="accordion-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Professional Design
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 py-3">
                                    <h2 className="accordion-header accordion-header-2 d-flex">
                                        <button className="accordion-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Top-Notch Support
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 py-3">
                                    <h2 className="accordion-header accordion-header-3 d-flex">
                                        <button className="accordion-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Header and Slider Options
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3