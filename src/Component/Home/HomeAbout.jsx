import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';
import Tittles from '../Tittles';
import ButtonCom from '../ButtonCom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeAbout() {
    const [aboutImages, setAboutImages] = useState(null);

    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                const res = await axios.get("https://vimalagro-backend.onrender.com/aboutus");
                if (res.data && res.data.length > 0) {
                    setAboutImages(res.data[0]); // take first object
                }
            } catch (err) {
                console.error("Error fetching aboutus images:", err);
            }
        };
        fetchAboutUs();
    }, []);


    return (
        <div className="my-0 my-md-3 pt-1 pt-md-3 overflow-hidden">
            <div className="testi_bg overflow-hidden">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center align-content-center py-1 py-lg-3">

                        {/* LEFT SIDE IMAGES */}
                        <div className=" col-12 col-lg-6 p-3">
                            <div className="h-100 d-flex">
                                <div className="sec1_imgtesti h-100">
                                    <div className='test-shinee'>
                                        <img
                                            src={aboutImages?.image1}
                                            alt=""
                                            className="img-fluid w-100 "
                                            data-aos="fade-right"
                                            data-aos-duration="1800"
                                            data-aos-once="true"
                                        />
                                    </div>
                                    <div className="my-3 h-100 test-shinee">
                                        <img
                                            src={aboutImages?.image2}
                                            alt=""
                                            className="img-fluid w-100"
                                            data-aos="fade-right"
                                            data-aos-duration="1800"
                                            data-aos-once="true"
                                        />
                                    </div>
                                </div>
                                <div className="sectesti_img ms-3 test-shinee" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                                    <img
                                        src={aboutImages?.image3}
                                        alt=""
                                        className="img-fluid w-100 h-100"
                                    />
                                </div>
                            </div>

                            {/* Slider Image */}
                            <div className="p-0 aboutslide_sec overflow-hidden">
                                <div className="aboutslider ms-auto m-0 overflow-hidden">
                                    <div className="p-0 m-0 overflow-hidden border border-5 border-white">
                                        <div className="slider_imageaboutus test-shinee" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                                            <img
                                                src={aboutImages?.image4}
                                                alt=""
                                                className="img-fluid w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE TEXT */}
                        <div className="h-100 col-12 col-lg-6 p-3 p-lg-5 pt-0 pt-md-3 pb-0 pb-md-2">
                            <div className='brdstart'>
                                <Tittles stitle={"About Us"} ltitle={"Authentic Taste, Global Trust"} />
                            </div>
                            <div className="px-0 py-1 py-md-3">
                                <div className='d-none d-sm-block'>
                                    <FaQuoteLeft className="fs-1 text-secondary" />
                                </div>
                                <div className="pt-2 pt-md-4 pera">
                                    Vimal Agro Products was born with a simple dream—to bring the authentic taste of Indian home-cooked food to every corner of the world. From a humble vision, it has grown into a globally trusted name, loved by families across continents. With respect for age-old recipes and a passion for quality, we make it easy to enjoy the richness of Indian cuisine anytime, anywhere. From curries and pickles to snacks and sweets, every Vimal Agro product celebrates tradition, made convenient for modern life. Savor the tradition—made with love.
                                </div>

                                <div className="row m-0 mt-2 mt-md-3 d-none d-md-flex">
                                    <div className="col-3 p-0 m-0 bg-white">
                                        <div
                                            className="h-100 fs-1 text-white text-center shadow d-flex align-items-center justify-content-center "
                                            style={{ backgroundColor: "#6a1a1f", borderRadius: "20px 0px 0px 20px" }}
                                        >
                                            <FaQuoteRight />
                                        </div>
                                    </div>
                                    <div
                                        className="col-9 shadow bg-white"
                                        style={{ borderRadius: "0px 20px 20px 0px" }}
                                    >
                                        <div className="h-100 d-flex align-items-center py-2 py-md-4 pera fw-bold text-center bg-white" style={{ background: "white" }}>
                                            " Vimal Agro proudly serves homes in India and beyond, making mealtimes easier, tastier, and filled with nostalgia. "
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center  justify-content-md-start  align-items-center align-content-center mt-2">
                                    <div className="mt-2">
                                        <Link to={"/aboutus"} className='text-decoration-none'>
                                            <ButtonCom btn={"View More"} />
                                        </Link>
                                    </div>
                                    {/* Logo Removed */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
