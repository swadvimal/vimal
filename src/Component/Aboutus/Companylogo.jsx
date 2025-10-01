import { useEffect, useState } from "react";
import axios from "axios";
import Tittles from "../Tittles";

function Companylogo() {

  const [logos, setLogos] = useState([]);
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/leaderlogo");

        if (Array.isArray(res.data)) {
          setLogos(res.data);
        } else if (res.data.data && Array.isArray(res.data.data)) {
          setLogos(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    const fetchStory = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/ourstory");
        if (Array.isArray(res.data)) {
          setStoryData(res.data);
        } else if (res.data.data && Array.isArray(res.data.data)) {
          setStoryData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching story:", error);
      }
    };

    fetchLogos();
    fetchStory();
  }, []);

  return (
    <>
      {/* Logos Section */}
      <div className="py-4" style={{ backgroundColor: "var(--ofwhite)" }}>
        <div className="container logo-section">
          <div className="row align-items-center">
            <div className="col-md-4 mb-1 mb-md-0">
              <p className="logo-text pera text-center text-md-start">
                We come from a wide range of global <br />
                technology leaders and fast-paced startups.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row py-1 py-md-4">
                {logos.length > 0 ? (
                  logos.map((logo, index) => (
                    <div className="col-6 col-md-4 col-lg-3  my-2 " key={index}>
                      <div
                        key={index}
                        className="d-flex justify-content-center p-1"
                      >
                        <img
                          src={logo.Leaderlogoimage}
                          height={70}
                          alt={`Logo ${index}`}
                          className="object-fit-contain rounded"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Loading logos...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container my-3 my-md-5 bg-white px-3 px-md-0">
        <h4 className="text-center">
          <Tittles stitle="Our Story" />
        </h4>
        {storyData.length > 0 ? (
          storyData.map((story, index) => (
            <p
              key={index}
              className="story-text text-justify mt-3 mt-md-3 pera"
            >
              {story.storypera}
            </p>
          ))
        ) : (
          <p className="text-center">Loading story...</p>
        )}
      </div>
    </>
  );
}

export default Companylogo;
