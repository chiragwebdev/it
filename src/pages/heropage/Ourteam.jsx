import React from 'react'
import avatar1 from '../../images/avatar 1.png'
import avatar2 from '../../images/avatar 2.png'
import avatar3 from '../../images/avatar 3.png'
import avatar4 from '../../images/avatar 4.png'
import {  FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Ourteam() {

    const ourteamdata = [
        {
            avtarimg: avatar1,
            title:"Coriss Ambady",
            subtitle:"FINANCIAL ANALYST",
            content:"Fermentum massa justo sit amet risus morbi leo.",
        },
        {
            avtarimg: avatar2,
            title:"Cory Zamora",
            subtitle:"MARKETING SPECIALIST",
            content:"Fermentum massa justo sit amet risus morbi leo.",
        },
        {
            avtarimg: avatar3,
            title:"Nikolas Brooten",
            subtitle:"SALES MANAGER",
            content:"Fermentum massa justo sit amet risus morbi leo.",
        },
        {
            avtarimg: avatar4,
            title:"Jackie Sanders",
            subtitle:"INVESTMENT PLANNER",
            content:"Fermentum massa justo sit amet risus morbi leo.",
        },
    ]

    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR TEAM</h2>
                        <div className="bar"></div>
                        <p>Think unique and be innovative. Make a difference</p>
                    </div>
                </div>
                <div className="row gy-4 ourteam-card">
                    {
                        ourteamdata.map((cuel, index)=>{
                            return(
                                <div className="col-xl-3 col-md-6 " key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={cuel.avtarimg} alt="avtar" className='avtar-img mb-3' />
                                            <h5 className="card-title mb-3">{cuel.title}</h5>
                                            <h6 className="card-subtitle mb-4 text-body-secondary">{cuel.subtitle}</h6>
                                            <p className="card-text mb-3">{cuel.content}</p>
                                            <div className='d-inline-flex'>
                                                <Link className='page-btn-hover me-3'><FaLinkedinIn /></Link>
                                                <Link className='page-btn-hover me-3'><FaFacebookF /></Link>
                                                <Link className='page-btn-hover me-3'><FaTwitter /></Link>
                                            </div>
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

export default Ourteam