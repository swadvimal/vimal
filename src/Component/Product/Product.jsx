import HOC from "../HOC"
import '../../assets/Css/Product.css'
import HomeProduct from "../Home/HomeProduct"
import axios from "axios";
import { useEffect, useState } from "react";
function Product() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/productbanner");
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
          src={banner.desktopproductbanner}
          alt="desktop-banner"
          className="img-fluid w-100 d-lg-block d-none "
          style={{ height: "100%" }}
        />
        <img
          src={banner.mobileproductbanner}
          alt="mobile-banner"
          className="img-fluid w-100 d-lg-none d-block object-fit-cover"
          style={{ height: "100%" }}
        />
      </div> */}
      {/* <div>
        <div className="d-none d-lg-block bannervimaldesktop mt-5">
          <img src={banner.desktopproductbanner} alt="" className="img-fluid w-100 h-100 " />
        </div>
        <div className="d-block d-lg-none bannervimalmobile mt-5">
          <img src={banner.mobileproductbanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
        </div>
      </div> */}
      <HomeProduct />

    </>
  )
}

export default HOC(Product)