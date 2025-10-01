import React from 'react'
import Tittles from '../Tittles';

function AboutImpact() {

    const services = [
        {
            title: "Empowering Farmers",
            description: "Through fair trade practices, we empower farmers with better income and sustainable livelihoods.",
            icon_image: require("../../assets/Images/images_1-removebg-preview.png"),
            bgImage: require("../../assets/Images/About-Impact/impect-bg1.jpg"),
            animation: "zoom-in"
        },
        {
            title: "Trusted Quality",
            description: "Delivering pure, authentic, and trusted products that reach millions of households worldwide",
            icon_image: require("../../assets/Images/About-Impact/impect-img2.png"),
            bgImage: require("../../assets/Images/About-Impact/impect-bg2.jpg"),
            animation: "zoom-in",
            delay: "400"
        },
        {
            title: "Sustainability",
            description: "Committed to eco-friendly practices, reducing water and resource consumption with every product",
            icon_image: require("../../assets/Images/About-Impact/impect-img3.png"),
            bgImage: require("../../assets/Images/About-Impact/impect-bg3.jpg"),
            animation: "zoom-in",
            delay: "400"
        },
        {
            title: "Global Reach",
            description: "Taking the taste of India to kitchens across the globe, while staying true to our roots",
            icon_image: require("../../assets/Images/About-Impact/impect-img4.png"),
            bgImage: require("../../assets/Images/About-Impact/impect-bg4.webp"),
            animation: "zoom-in",
            delay: "600"
        },
        {
            title: "Community Impact",
            description: "From education to nourishment, our growth fuels initiatives that bring smiles to communities",
            icon_image: require("../../assets/Images/images_3-removebg-preview.png"),
            bgImage: require("../../assets/Images/About-Impact/impect-bg5.jpg"),
            animation: "zoom-in",
            delay: "800"
        }
    ];

    return (
        <>
            <div className='container my-2 my-md-5 pt-1 pt-md-5'>
                <div className='text-center me-1 me-md-0'><Tittles stitle={"Rooted In Impact"} ltitle={"Every product we cultivate is rooted in impact"} /></div>

                <div className='row mt-3 justify-content-center'>
                    {services.map((service, index) => (
                        <div className='col-12 col-lg-4 col-md-6 p-3 me-1 me-md-0' key={index} >
                            <div className='h-100' data-aos={service.animation} data-aos-duration="1500" data-aos-delay={service.delay} data-aos-once="true">
                                <div className='Service_card h-100 position-relative p-1 overflow-hidden'>
                                    <div
                                        className="bg-image position-absolute rounded-4 h-100 w-100"
                                        style={{
                                            backgroundImage: `url(${service.bgImage})`,
                                            boxShadow: "inset 0px 0px 140px 1200px rgba(94, 0, 0, 0.61)",
                                            top: "0", bottom: "0", right: "0", left: "0", backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat", backgroundPosition: "center", transition: "all 0.5s ease-in-out",
                                            zIndex: "0"
                                        }}
                                    />
                                    <div className='position-relative z-1 text-white p-4 px-5 mt-3'>
                                        <h4 className='fw-bold'>{service.title}</h4>
                                        <p className='pera fw-medium mt-2 mb-xxl-5 mb-4' style={{ wordBreak: "break-all" }}>
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className='Service_icon_wrapper'>
                                        <img
                                            src={service.icon_image}
                                            alt={service.title}
                                            className="Service_icon bg-white p-3"
                                            style={{ width: "70px", height: "70px", objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutImpact