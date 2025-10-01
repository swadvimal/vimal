import { useEffect, useState } from "react";
import Tittles from "../Tittles";
import "../../assets/Css/Aboutus.css";
import HOC from "../HOC";
import AboutImpact from "./AboutImpact";
import Faq from "./Faq";
import Companylogo from "./Companylogo";
import Principals from "./Principals";
import axios from "axios";

const API_URL = "https://backendvimalagro.onrender.com/vimalabout";

function AboutusSec() {
  const [aboutImages, setAboutImages] = useState([]);

  // ✅ Fetch Aboutus images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(API_URL);
        // sort oldest first
        const sorted = res.data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setAboutImages(sorted);
      } catch (error) {
        console.error("Error fetching About Us images:", error);
      }
    };

    fetchImages();
  }, []);


  // banner created
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/aboutbanner");
        if (res.data && res.data.length > 0) {
          setBanner(res.data[0]); // ✅ take the first object
        }
      } catch (err) {
        console.error("Error fetching banner:", err);
      }
    };
    fetchBanner();
  }, []);

  if (!banner) {
    return null; // or loader/spinner
  }
  return (
    <>
      {/* <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      className="landingimg mt-5 pt-md-4 pt-0"
    >
    
      <img
        src={banner.desktopaboutbanner}
        alt="desktop-banner"
        className="img-fluid w-100 d-lg-block d-none "
        style={{ height: "100%" }}
      />

      <img
        src={banner.mobileaboutbanner}
        alt="mobile-banner"
        className="img-fluid w-100 d-lg-none d-block object-fit-cover"
        style={{ height: "100%" }}
      />
    </div> */}

      {/* <div>
        <div className="d-none d-lg-block bannervimaldesktop mt-5">
          <img src={banner.desktopaboutbanner} alt="" className="img-fluid w-100 h-100 " />
        </div>
        <div className="d-block d-lg-none bannervimalmobile mt-5">
          <img src={banner.mobileaboutbanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
        </div>
      </div> */}
      {/* About Us Section */}
      <div className="py-3 py-md-5 overflow-hidden contactinfo_bg mt-5">
        <div className="container mt-4">
          <div className="row">
            {/* Left Text Content */}
            <div className="col-lg-4 col-12 mb-2 mb-lg-0 mx-auto">
              <h6
                className="text-uppercase mb-0 mb-md-2 stittle ps-2"
                data-aos="fade-up "
                data-aos-duration="1500"
                data-aos-delay="50"
                data-aos-once="true"
              >
                <Tittles stitle="About Us" />
              </h6>
              <h5 className="fw-bold ps-md-2 ps-1 ftittle">
                Combining culinary heritage, manufacturing excellence, and
                global reach—feeding
                <span className="d-block">
                  the world with something for everyone.
                </span>
              </h5>
            </div>

            {/* Middle Paragraph Content */}
            <div className="col-lg-6 col-12 mb-1 mb-md-2 mb-lg-0 ms-auto px-3 px-lg-0">
              <p className="text-muted pera text-justify pera">
                On a mission to bring authentic, convenient, and high-quality
                ethnic foods to consumers across the globe. From rich curries and
                accompaniments to traditional sweets and savoury snacks, our
                offerings cater to modern consumers seeking authentic Indian
                flavours with everyday convenience. Under the umbrella of{" "}
                <b className="text-dark">Vimal Agro Products</b>, our brand
                architecture is thoughtfully designed to cater to every palate
                and purpose. <b className="text-dark">Swad</b> and{" "}
                <b className="text-dark">Bvitas</b> focus on delivering indulgent
                and innovative offerings that fall under the “fun-for-you” and
                “better-for-you” categories. At the same time,{" "}
                <b className="text-dark">Big Pantry</b> offers wholesome,
                everyday products that align with the “good-for-you” philosophy.
                With a strong global distribution network, we serve retail,
                horeca, gifting, and private label clients across diverse
                markets.
              </p>
            </div>

            {/* Right Images from API */}
            <div >

              {aboutImages.length > 0 ? (
                aboutImages.map((img) => (
                  <div key={img._id} className="col-lg-7 text-end ms-auto col-12">
                    <div className='rounded-5 shadow mt-0 mt-lg-3 test-shine' >
                      <img
                        src={img.vimalaboutimage}
                        alt="About Us"
                        className="img-fluid object-fit-cover w-100 h-100 rounded-5"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted text-center">
                  No About Us Images available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="overflow-hidden">
        <Companylogo />
        <Principals />
        <AboutImpact />
        {/* <Brouchers /> */}
        <Faq />
      </div>
    </>
  );
}

export default HOC(AboutusSec);
