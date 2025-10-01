import React, { useState, useEffect } from 'react';
import Tittles from './Tittles';
import axios from 'axios';

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    const fetchCertificates = async () => {
      try {
        const res = await axios.get("https://vimalagro-backend.onrender.com/certificate");
        if (res.data && res.data.length > 0) {
          setCertificates(res.data);
        }
      } catch (err) {
        console.error("Error fetching certificates:", err);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <>
      <section className={`red-certificates-section py-4 py-md-5 ${isVisible ? 'visible' : ''}`}>
        <div className="container px-4">
          {/* Header Section */}
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <div className="header-content">
                <h2
                  className="ftittle fw-bold m-0 p-0 text-capitalize"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                ></h2>
                <div
                  className="text-center mb-2"
                  style={{ color: "#bb0000", textShadow: "6px 7px 10px #31010131" }}
                >
                  <Tittles ltitle={"Our Certificates"} />
                </div>
                <p className="pera pt-2">
                  Globally approved standards for quality, safety, and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="row g-2 g-lg-3 justify-content-center">
            {certificates.map((item, index) => (
              <div className="col-lg-2 col-4 mt-3" key={index}>
                <div className="h-100 bg-white certificate-item">
                  <div className="text-center d-flex align-items-center justify-content-center p-2 p-lg-3 certificate_height" >
                    <img
                      src={item.certificateimage}
                      alt={`Certificate-${index}`}
                      className="img-fluid object-fit-contain  w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates