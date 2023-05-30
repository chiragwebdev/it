import React, { useEffect, useRef, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from "../../images/client (1).png"
import client2 from "../../images/client (2).png"
import client3 from "../../images/client (3).png"
import client4 from "../../images/client (4).png"
import client5 from "../../images/client (5).png"



function OurClient() {
  const [start, setstart] = useState(false)
  const slider = useRef("")
  

  useEffect(() => {
    const clientslider = new IntersectionObserver((entries) => {
      // const ab = slider.current.getBoundingClientRect().top
      // console.log(ab) 
      // console.log('offsetTop: ' + offsetTop) 

      if (entries[0].isIntersecting) {
        setstart(true)
      }
    })
    clientslider.observe(slider.current)

  }, []);

  const options = {
    items: 2,
    margin: 12,
    loop: true,
    autoplay:start,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      }
    }
  }

  return (
    <section className='pad-tb-section' >
      <div className="container">
        <div className="row">
          <div className="col text-center mb-5">
            <h2 className='mb-2 section-title col-xl-6 col-lg-8 col-md-10 m-auto'>OUR CLIENT</h2>
            <div className="bar"></div>
            <p className='col-xl-6 col-lg-8 col-md-10 m-auto'>What Our Client Says..</p>
          </div>
        </div>
        <div className="row" ref={slider}>
          <div className="col">
            <OwlCarousel className='owl-theme' {...options}>
              <div className='item client'>
                <div className='d-flex mb-3'>
                  <div className='me-4'>
                    <img src={client1} alt={client1} className='client-img' />
                  </div>
                  <div>
                    <h3 className='section-title'>John Anderson</h3>
                    <p className='client-sub'>Web developer</p>
                  </div>
                </div>
                <p className='client-content'>We have been working with this IT company for years, and they consistently provide exceptional service. Their solutions have truly transformed our business.</p>
              </div>
              <div className='item client'>
                <div className='d-flex mb-3'>
                  <div className='me-4'>
                    <img src={client2} alt={client2} className='client-img' />
                  </div>
                  <div>
                    <h3 className='section-title'>John Anderson</h3>
                    <p className='client-sub'>Web developer</p>
                  </div>
                </div>
                <p className='client-content'>We have been working with this IT company for years, and they consistently provide exceptional service. Their solutions have truly transformed our business.</p>
              </div>
              <div className='item client'>
                <div className='d-flex mb-3'>
                  <div className='me-4'>
                    <img src={client3} alt={client3} className='client-img' />
                  </div>
                  <div>
                    <h3 className='section-title'>John Anderson</h3>
                    <p className='client-sub'>Web developer</p>
                  </div>
                </div>
                <p className='client-content'>We have been working with this IT company for years, and they consistently provide exceptional service. Their solutions have truly transformed our business.</p>
              </div>
              <div className='item client'>
                <div className='d-flex mb-3'>
                  <div className='me-4'>
                    <img src={client4} alt={client4} className='client-img' />
                  </div>
                  <div>
                    <h3 className='section-title'>John Anderson</h3>
                    <p className='client-sub'>Web developer</p>
                  </div>
                </div>
                <p className='client-content'>We have been working with this IT company for years, and they consistently provide exceptional service. Their solutions have truly transformed our business.</p>
              </div>
              <div className='item client'>
                <div className='d-flex mb-3'>
                  <div className='me-4'>
                    <img src={client5} alt={client5} className='client-img' />
                  </div>
                  <div>
                    <h3 className='section-title'>John Anderson</h3>
                    <p className='client-sub'>Web developer</p>
                  </div>
                </div>
                <p className='client-content'>We have been working with this IT company for years, and they consistently provide exceptional service. Their solutions have truly transformed our business.</p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section >
  )
}

export default OurClient;
