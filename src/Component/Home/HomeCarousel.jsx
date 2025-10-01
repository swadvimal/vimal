import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeCarousel() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/homebanner");
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
//     <div
//       style={{ position: "relative", width: "100%", overflow: "hidden" }}
//       className="landingimg mt-5 pt-md-4 pt-0"
//     >
//       {/* Desktop View */}
// <div className="h-100 landingimg">
//         <img
//         src={banner.desktophomebanner}
//         alt="desktop-banner"
//         className="img-fluid w-100 h-100 d-lg-block d-none"
//         // style={{ height: "100%" }}
//       />
// </div>

//       {/* Mobile View */}
//  <div className="landingimg" >
//        <img
//         src={banner.mobilehomebanner}
//         alt="mobile-banner"
//         className="img-fluid w-100  "
//         // style={{ height: "100%" }}
//       />
//  </div>
//     </div>
<>
<div>
  <div className="d-none d-lg-block bannervimaldesktop mt-5">
    <img src={banner.desktophomebanner} alt="" className="img-fluid w-100 h-100 "/>
  </div>
  <div className="d-block d-lg-none bannervimalmobile mt-5">
    <img src={banner.mobilehomebanner} alt="" className="img-fluid w-100 h-100 object-fit-cover"/>
  </div>
</div>
</>
  );
}

export default HomeCarousel;
