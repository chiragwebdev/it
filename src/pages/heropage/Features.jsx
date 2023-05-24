import React from 'react'
import { FiAlertCircle, FiBell, FiLayout, FiMail, FiMousePointer, FiSettings } from 'react-icons/fi'

function Features() {

    const feature = [
        {
            icon: <FiSettings />,
            title: "Incredible Infrastructure",
            sub: "Incredible Infrastructure refers to a robust and remarkable system of physical and digital elements that support various operations and functions."
        },
        {
            icon: <FiMail />,
            title: "Email Notifications",
            sub: "Email Notifications: Receive instant updates, important information, and relevant details delivered directly to your inbox. Stay informed and never miss a beat!"
        },
        {
            icon: <FiLayout />,
            title: "Simple Dashboard",
            sub: "A simple dashboard provides concise insights, metrics, and data visualization for easy monitoring and decision-making in a user-friendly interface."
        },
        {
            icon: <FiAlertCircle />,
            title: "Information Retrieval",
            sub: "Information Retrieval is the process of retrieving relevant information from a collection based on user queries or search terms."
        },
        {
            icon: <FiMousePointer />,
            title: "Drag and Drop Functionality",
            sub: "Drag and drop functionality allows users to click and drag elements, then drop them into a different location or container on a webpage or application."
        },
        {
            icon: <FiBell />,
            title: "Deadline Reminders",
            sub: "Deadline Reminders: Set alerts for important due dates, tasks, and events to stay organized and ensure timely completion."
        },
    ]

    return (
        <section className='pad-tb-section'>
            <div className="container">
                <div className="row">
                    <div className="col text-center mb-5">
                        <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR FEATURES</h2>
                        <div className="bar"></div>
                        <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        feature.map((elm, ind) => {
                            return (
                                <div className="col-lg-6 features-card mb-4" key={ind}>
                                    <div className="card h-100 ">
                                        <div className="card-body d-flex">
                                            <div><p className='features-icon me-3'>{elm.icon}</p></div>
                                            <div>
                                                <h4 className='mb-2 section-title'>{elm.title}</h4>
                                                <p className='features-con'>{elm.sub}</p>
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

export default Features