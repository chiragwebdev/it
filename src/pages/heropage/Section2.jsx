import React from 'react'

function Section2() {
    const data = [
        {
            count: "01",
            title: "Concept",
            content: "Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare.",
            delay: 0.1,
        },
        {
            count: "02",
            title: "Prepare",
            content: "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.",
            delay: 0.2,
        },
        {
            count: "03",
            title: "Retouch",
            content: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.",
            delay: 0.3,
        },
        {
            count: "04",
            title: "Finalize",
            content: "Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.",
            delay: 0.4,
        },
    ]

    return (
        <section className='pad-tb-section how-do-it'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className=' mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto section2-title'>How We Do It?</h2>
                        <div className="bar sec-bar"></div>
                        <p className='section2-sub-title'>We make your spending stress-free for you to have the perfect control.</p>
                    </div>
                </div>
                <div className="row row-gap-4 sect-2">
                    {
                        data.map((cuel, index) => {
                            return (
                                <div className="col-xl-3 col-md-6 stress" key={index} id={`stress-${index}`}>
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