import React, { useEffect, useState } from 'react';
import Tittles from '../Tittles';

function Faq() {

  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    fetch("https://vimalagro-backend.onrender.com/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaqList(data.data);
      })
      .catch((err) => {
        console.error("Error fetching FAQs:", err);
      });
  }, []);

  return (
    <div className='container  pt-0 px-3 px-md-0'>
      <div className='row d-flex justify-content-center align-content-center align-items-center ' >
        {/* <div className='col-12 col-lg-6 ' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
          <div className="h-100">
            <div className='test-shine'>
              <img
                src="https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png"
                className='img-fluid w-100 h-100 object-fit-cover'
                alt=""
              />
            </div>
          </div>
        </div> */}

        <div className='col-12 col-lg-6 mb-0 mb-md-4 p-2 p-md-4 faq_height' >
          <div className="h-100 ">
            <div className=' text-center'>
              <Tittles stitle={"FAQs"} />
            </div>
         

            <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
              {faqList.map((faq, index) => {
                const collapseId = `flush-collapse-${index}`;
                const headingId = `flush-heading-${index}`;
                const isFirst = index === 0;

                return (
                  <div className="accordion-item border-0" key={index}>
                    <h2 className="accordion-header my-1 my-md-2" id={headingId}>
                      <button
                        className={`accordion-button ${!isFirst ? 'collapsed' : ''} addicon text-white p-2 p-md-3 pera`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? 'true' : 'false'}
                        aria-controls={collapseId}
                      >
                        <span className=' pe-3 pera'>{faq.que}</span>
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body pera text-secondary">
                        {faq.ans}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq