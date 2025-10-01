import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Tittles from '../Tittles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function HomeRecipe() {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1800,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [recipes, setRecepie] = useState([])
  const FetchProduct = async () => {
    try {
      const res = await axios.get("https://vimalagro-backend.onrender.com/api/blogs");
      setRecepie(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div className='home-recipe-wrapper bg-white overflow-hidden my-5 mb-3 mb-md-5'>
      <div className='container position-relative'>
        <div className='text-center mb-2 mb-md-4'>
          <Tittles ltitle={'Mouth-Watering Recipes'} />
        </div>
        <Slider {...settings}>
          {recipes.map((recipe, index) => (
            <div key={index} className='p-3 ps-3 ps-lg-0 ms-0 ms-lg-2'>
              <Link to={`/Recepie/${recipe._id}`} className="text-decoration-none text-dark">
                <div className='recipe_image h-100 m-2 '>
                  <div
                    className='test-shinee position-relative recipe-shadow-wrapper'
                    data-aos='fade-up'
                    data-aos-duration='1500'
                    data-aos-once='true'
                  >
                    <img
                      src={recipe.blogImage}
                      className='img-fluid object-fit-cover w-100'
                      style={{ borderRadius: '17px', height: '220px' }}
                      alt={recipe.title}
                    />
                  </div>
                  <div
                    className='recipe_tittle text-center bg-white mx-auto p-3 position-relative d-flex flex-column justify-content-center align-items-center'
                  >
                    <div className='fw-bold mb-1'>{recipe.title}</div>
                    <div className='pera'>{recipe.description}</div>
                    {/* <Link className='text-decoration-none' to={"/"}><ButtonCom btn="Make It" /></Link> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeRecipe