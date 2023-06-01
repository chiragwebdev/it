import React from 'react'
import anylasis from '../../images/adv-anylasis.png'
import marketing from '../../images/adv-marketing.png'
import stratagy from '../../images/adv-stratagy.png'
import development from '../../images/adv-development.png'


function AdvSec2() {
    const data = [
        {
            img: marketing,
            title: "Marketing",
            content: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.",
        },
        {
            img: stratagy,
            title: "Strategy",
            content: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.",
        },
        {
            img: development,
            title: "Development",
            content: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.",
        },
        {
            img: anylasis,
            title: "Data Analysis",
            content: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.",
        },
    ]



    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>The full service we are offering is specifically designed</h2>
                        <div className="bar sec-bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </div>
                </div>
                <div className="row gy-4">
                    {
                        data.map((cuel, index) => {
                            return (
                                <div className="col-xl-3 col-md-6 " key={index}>
                                    <div className="">
                                        <div className="card-body text-center">
                                            <img src={cuel.img} className='adv-img mb-4'/>
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

export default AdvSec2