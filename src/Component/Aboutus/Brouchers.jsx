import React from "react";
import { Link } from "react-router-dom";
import Tittles from "../Tittles";
import ButtonCom from "../ButtonCom";

function Brouchers() {
  return (
    <div className="brouchers_bg overflow-hidden">
      <div className="container py-5">
        <div className="row p-2 p-lg-5 py-5 ">
          <div className="col-12 col-lg-6 py-3" data-aos="fade-right"
            data-aos-duration="1700" data-aos-once="true">
            <div className="h-100 text-white pt-3">
              <div className="brdstart mt-3 text-white">
                <div className="jr_tittle "><Tittles stitle="Our Brochures" ltitle="Innovation Meets Everyday Needs" /></div>
              </div>
              <div
                className="pera pt-4 p-0 py-lg-3  "
                style={{ color: "gray" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eveniet corporis quas eligendi cum facere voluptate nulla,
                commodi delectus ducimus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Harum eveniet corporis quas eligendi cum
                facere voluptate nulla, commodi delectus ducimus!
              </div>
              <div
                className="pera pt-2 p-0  ps-0 "
                style={{ color: "gray" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eveniet corporis quas eligendi cum facere voluptate nulla,
                commodi delectus ducimus!
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-0 p-lg-5 pt-3">
            {/* <div className='p-5 pt-3 mx-auto' >
        <div class="test-shine mx-auto m-3" style={{width:"250px",height:"250px"}} >
          <Link
            target="_blank"
            to={require("../Assets/pdf and broushers/j-r-equipment.pdf")}
          >
            <img
              src={require("../Assets/pdf and broushers/images.jpeg")}
              className="img-fluid w-100 h-100"
            />
          </Link>
        </div>

        <div className='mx-auto' style={{width:"250px"}} >
          <ButtonHover
            btnttitle="Download Now"
            target="_blank"
            to={require("../Assets/pdf and broushers/j-r-equipment.pdf")}
            data-title="images/brochure/j-r-equipment.pdf"
            className="w-100"
          ></ButtonHover>
        </div>
      </div> */}

            <div
              className="mx-auto"
              style={{ height: "250px", width: "250px" }}
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <Link
                to={require("../../assets/Images/groser.pdf")}
                target="_blank"
              >
                <div className="test-shine" style={{ height: "250px" }}>
                  <img
                    src={require("../../assets/Images/broucher_image.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>

                <div>  <div className="elementor-button p-1 py-2 w-100 text-center mt-3">
                  <div
                    to={require("../../assets/Images/groser.pdf")}
                    className={`elementor-button-text text-white text-decoration-none fw-medium `}
                  >
                   <ButtonCom btn={" Download Now"}/>
                  </div>
                </div></div>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brouchers;