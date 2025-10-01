import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ButtonCom from '../ButtonCom';
import Tittles from '../Tittles';
import axios from 'axios';

function HomeCategory() {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBrand, setActiveBrand] = useState(null);

  const sliderRef = React.useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/categories");

        if (res.data && res.data.length > 0) {
          // Flatten out categories from the response
          console.log(res.data);

          const catList = res.data.flatMap(item => item || []);
          setCategories(catList);
          setActiveBrand(catList[0]); // set first as default
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (current) => {
      setActiveIndex(current);
      setActiveBrand(categories[current]);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!activeBrand) return null; // prevent crash on first render

  return (
    <>
      <div className='py-2 py-md-5 p-1 category_bgimg'>    
        <div className='container'>
          <div className='text-center p-0 m-0'>
            <Tittles stitle={"Our Categories"} />
          </div>
          <div className="col-md-8 col-10 m-auto pt-2 pt-md-4 categoryarrow">

            <Slider {...settings} ref={sliderRef}>
              {categories.map((item, index) => (
                <div key={index} className="px-2 px-sm-2 m-1">
                  <div
                    className={`shadow-sm text-dark rounded-pill text-center d-flex align-items-center justify-content-center category-btn-container bg-transparent ${activeIndex === index ? "active-btn" : "homecategory-btn_active"
                      }`}
                  >
                    <button
                      className="nav-link text-center w-100 h-100 py-2 px-3 text-capitalize category-btn bg-transparent"
                      onClick={() => {
                        setActiveIndex(index);
                        setActiveBrand(item);
                        if (sliderRef.current) {
                          sliderRef.current.slickGoTo(index);
                        }
                      }}
                    >
                      {item.category[0].categoryName}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="categreySec row align-items-center rounded-4 pt-1 pt-md-4 overflow-hidden">
            <div
              className="col-md-6 d-flex justify-content-center cat_image"
            >
              <div className="test-shine">
                <img
                  src={activeBrand.category[0].categoryBanner}
                  alt={activeBrand.category[0].categoryName}
                  className="img-fluid brand-main-img"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
            </div>

            <div
              className="col-md-6 text-start d-flex flex-column justify-content-center"

            >
              <div className="fw-bold ps-2">
                <h4
                  className="fw-bold stittle p-0 m-0 text-center text-sm-start"
                >
                  {activeBrand.category[0].categoryName}
                </h4>
              </div>
              <p className='pera mt-2 ps-2 d-none d-sm-block'>{activeBrand.category[0].description}</p>
              <div className='ms-2 mt-2 mt-sm-0 text-center text-sm-start'>
                <Link to={`product/${activeBrand.productId._id}`} className='text-decoration-none'> <ButtonCom btn={"Explore Now"} /></Link>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );

}

export default HomeCategory

