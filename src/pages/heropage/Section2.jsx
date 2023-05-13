import React from 'react'

function Section2() {
    const data = [
        {
            count:"01",
            title:"Concept",
            content:"Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare.",
        },
        {
            count:"02",
            title:"Prepare",
            content:"Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis.",
        },
        {
            count:"03",
            title:"Retouch",
            content:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero.",
        },
        {
            count:"04",
            title:"Finalize",
            content:"Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo.",
        },
    ]
    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>How We Do It?</h2>
                        <div className="bar"></div>
                        <p>We make your spending stress-free for you to have the perfect control.</p>
                    </div>
                </div>
                <div className="row gy-4 sect-2">
                    {
                        data.map((cuel, index) => {
                            return (
                                <div className="col-xl-3 col-md-6 stress" key={index}>
                                    <div className="card">
                                        <div className="card-body process card-border-ani">
                                            <svg className="border-statick">
                                                <rect x="1px" y="1px" rx="5px" ry="5px" width="100%" height="100%"></rect>
                                            </svg>
                                            <p className='process-count'>{cuel.count}</p>
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