import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import Slider from 'react-slick';

function YouTubeVideo() {
    const videos = [
        {
            id: 1,
            title: "Mango Smoothie made with Alphonso Mango Pulp | SWAD Mango Pulp",
            description:
                "Make your quarantine worthwhile by treating yourself with luscious mango smoothie. An amazing blend of taste and flavors enriched with goodness of rich mango pulp from Swad. An easy recipe to make and relish with your loved ones. Try it today.",
            thumbnail: require("../../assets/Images/you tube video image -1.jpg"),
            videoUrl: "https://www.youtube.com/embed/UeUw2duQBV8",
        },
        {
            id: 2,
            title: "Vegetarian Mango Jelly Recipe | How to Make Mango Jelly at Home",
            description:
                "This homemade vegetarian mango jelly is a delightful, fruity treat made with fresh mango puree and set with agar-agar, making it gelatin-free. Bursting with tropical flavor, it's easy to make and perfect as a light dessert or snack, capturing the sweetness and vibrant color of ripe mangoes.",
            thumbnail: require("../../assets/Images/you tube video image -2.jpg"),
            videoUrl: "https://www.youtube.com/embed/0H_QHBNMnjA",
        },
        {
            id: 3,
            title: "How to make Mango Cheese Cake | Swad Recipe",
            description:
                "Swad brings authentic Indian flavors to your home with the convenience of online shopping. Explore our wide range, including mango pulp, pickles, curry pastes, chutneys, sauces, and ready-to-eat meals. Simply add your favorites to the cart, and we’ll deliver them to your doorstep anywhere in India. Start shopping today!",
            thumbnail: require("../../assets/Images/you tube video image -3.jpg"),
            videoUrl: "https://www.youtube.com/embed/RbGnCEg9cfQ",
        },
    ];

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    let sliderRef = null;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        vertical: !isMobile,
        slidesToShow: isMobile ? 2 : 2,
        slidesToScroll: 1,
        verticalSwiping: !isMobile,
        adaptiveHeight: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                    verticalSwiping: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    };

    return (
        <div className="container my-3 my-lg-5 my-md-">
            <div className="row overflowX-hidden">
                <div className="col-12 col-lg-8 col-md-8 p-3 pt-md-4">
                    <div className="h-100">
                        <iframe
                            className="main_blog_video object-fit-cover rounded-3"
                            width="100%"
                            height="420px"
                            src={selectedVideo.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <h5 className="card-title fw-bold mt-2 ftitle text-capitalize">{selectedVideo.title}</h5>
                        <p className="card-text text-secondary my-2 pera">{selectedVideo.description}</p>
                    </div>
                </div>

                <div className="col-12 col-lg-4 col-md-4 p-0 p-lg-3 p-md-3 ">
                    <div className="h-100 youtubevideo">
                        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="mb-3 mb-lg-4 video-thumbnail p-1  youtubevideo"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    <img
                                        src={video.thumbnail}
                                        className="img-fluid w-100 object-fit-cover rounded-3 "
                                        alt={video.title}
                                    />
                                    <h6 className="card-title fw-bold mt-2 video-title">{video.title}</h6>
                                </div>
                            ))}
                        </Slider>

                        <div className="d-flex justify-content-center align-items-center gap-2 p-2">
                            {!isMobile ? (
                                <>
                                    <button onClick={() => sliderRef.slickPrev()} className="slider-btn">
                                        <FaChevronDown size={16} />
                                    </button>
                                    <button onClick={() => sliderRef.slickNext()} className="slider-btn">
                                        <FaChevronUp size={16} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => sliderRef.slickPrev()} className="slider-btn">
                                        <FaChevronLeft size={16} />
                                    </button>
                                    <button onClick={() => sliderRef.slickNext()} className="slider-btn">
                                        <FaChevronRight size={16} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YouTubeVideo