import React from 'react';
import { Link } from 'react-router-dom';
import videolink from "../../assets/Video/why_choose_us_video.mp4";
import ButtonCom from '../ButtonCom';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import Tittles from '../Tittles';

function HomeContact() {

  const newsItems = [
    {
      delay: 200,
      category: "WE BELIEVE IN FRESHNESS",
      title: "To provide unmatched organic taste, better health, introduce people to the exceptional Indian dining experience and, iterate as a lifestyle everywhere in the world."
    },
    {
      delay: 400,
      category: "FROM FARM TO YOUR HOME",
      title: "To produce and deliver absolutely fresh and delicious products with handpicked ingredients & signature recipes. And become a reward for the employees as well as investors by catering to complete customer satisfaction and glorifying Indian food on the world map."
    }
  ]

  return (
    <>
      <div className="whychooseus_bg py-3 py-lg-5  overflow-hidden" >
        
        <video
          className="whychoose_video_bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videolink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <section className="whychoose-section">
            <div className="whychoose-content">
              <div className="whychoose-header" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                
                            <div className='brdstart'>
                                <Tittles stitle={"Contact Us"} ltitle={"We Believe In Personal Touch"} />
                            </div>
           
                <p className='text-white pera pt-2' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link className='text-decoration-none' to={"/contact"}>
                  <ButtonCom btn="Contact Us" />
                </Link>
              </div>
              <div className="whychoose-list">
                {newsItems.map((item, index) => (
                  <div key={index} className="whychoose-item"  data-aos="fade-left" data-aos-duration="1500">
                   <div data-aos="fade-left" data-aos-duration="1500" data-aos-once="true" data-aos-delay={item.delay}>
                     <div>
                      <span className="text-white fw-bold fs-5 me-4" style={{ letterSpacing: "1px" }}>{item.category}</span>
                    </div>
                    <div className="whychoose-item-content mt-2">
                      <h2 className='pera lh-lg' style={{ wordBreak: "break-all", color: "#919eac" }}>{item.title}</h2>
                      {/* <HiMiniArrowUpRight className="whychoose-arrow-icon text-white fs-3" /> */}
                    </div>
                   </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomeContact