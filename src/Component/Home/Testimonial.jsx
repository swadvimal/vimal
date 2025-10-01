import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import axios from 'axios';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('https://backendvimalagro.onrender.com/testimonial');
        setTestimonials(res.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='testimonial_bg py-0 py-md-5'>
      <div className='container overflow-hidden'>
        <div className='row d-flex align-items-center'>
          <div className='col-12 col-lg-4 p-4 ms-2 ms-lg-0 ms-md-0'>
            <div className='h-100' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
              <div className='text-white display-3'>
                <FaQuoteLeft />
              </div>
              <h4 className='fw-bold mt-1' style={{ color: 'rgb(249 176 176)' }}>
                Testimonial
              </h4>
              <h2 className='ftittle text-white fw-bold m-0 p-0 text-capitalize'>
                What Our Customers Say
              </h2>
              <div className='pera pt-3' style={{ color: '#b7b3b3' }}>
                From households to businesses, our products bring smiles across continents. Hear directly from our valued partners and customers.
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-8 p-4 pt-1 pt-lg-4'>
            <div className='h-100'>
              <Slider {...settings} className='testimonial-slider'>
                {testimonials.map((item) => (
                  <div key={item._id} className='h-100'>
                    <div className='testimonial-card mx-2 bg-white'>
                      <div className='pera text-secondary pt-0 d-flex align-items-center'>
                        {item.testimonialpera}
                      </div>
                      <div className='testi_bg_content position-relative'>
                        <div
                          className='testi_image'
                          style={{
                            background: `url(${item.testimonialimage}) no-repeat center/cover`,
                          }}
                        ></div>
                        <h4 className='testi_person text-capitalize text-white fw-bold text-medium d-flex w-100 text-center justify-content-center'>
                          {item.testimonialname}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
