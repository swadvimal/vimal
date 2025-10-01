import { FaFileDownload, FaMailBulk } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaMapLocationDot } from 'react-icons/fa6'
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { MdArrowForwardIos } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import brochurePDF from '../assets/Images/groser.pdf';

function Footer() {
  return (
    <div className="py-5 pt-4 pt-lg-5 pb-2 text-white" style={{ backgroundColor: "var(--red)" }}>
      <div className="container">
        <div className="row ms-0">
          <div className="col-12 col-md-6 col-lg-3 text-white pera mt-0 mt-md-2">
            Vimal Agro Products is a trusted name in exports and B2B solutions, delivering authentic Indian food worldwide. For retail purchases within India, explore our consumer brand at Swad.shop.

            <h5 className='pt-2 fw-bold'>Follow Us</h5>

            <div className='d-flex align-items-center'>
              <Link to={"https://www.instagram.com/swadbrand"} target='_blank'>
                <div className='fs-5 hover_name'><BsInstagram /></div>
              </Link>
              <Link to={"https://www.linkedin.com/company/vimalagro/"} target='_blank'>
                <div className='ps-3 fs-5 hover_name'><BsLinkedin /></div>
              </Link>
              <Link to={"https://www.facebook.com/share/1ExAbe4Mhu/"} target='_blank'>
                <div className='ps-3 fs-5 hover_name'><FaFacebook /></div>
              </Link>
              <Link to={"https://youtube.com/@swadbrand?si=i2mCupjmof9xLnxG"} target='_blank'>
                <div className='ps-3 fs-5 hover_name'><BsYoutube /></div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 ps-2 ps-lg-5 mt-4 mt-md-2">
            <h3 style={{ width: "fit-content" }}>
              Main Menu</h3>
            <div className='pera pt-1'>
              <NavLink to={"/"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> Home</NavLink>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <NavLink to={"/aboutus"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> About Us</NavLink>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <NavLink to={"/product"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> Product</NavLink>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <NavLink to={"/blog"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> Blog</NavLink>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <NavLink to={"/contact"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> Contact</NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-4 mt-md-2">
            <h3 className='' style={{ width: "fit-content" }}>Quick Links</h3>
            <div className='pera pt-1'>
              <NavLink to={"/csrpolicy"} className='text-decoration-none hover_name'> <MdArrowForwardIos /> CSR policy & projects
              </NavLink>
            </div>


          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-4 mt-md-2">
            <h3 style={{ width: "fit-content" }}>Contact Us</h3>
            <div className='pera pt-0 pb-1 d-block d-md-none'>
              <a
                href={brochurePDF}
                download
                target="_blank"
                rel="noopener noreferrer"
                className='text-decoration-none hover_name'
              >
                <span className='fs-5 pe-1'><FaFileDownload /></span>
                Download Brochure
              </a>
            </div>
            <div className='pera pt-0 pt-md-0'>
              <Link className='text-decoration-none hover_name'> <span className='fs-5 pe-1'><FaMapLocationDot /></span>Vimal Agro Products Pvt Ltd
                Near GIDC, Ten Road, Bardoli, Gujarat: 394601, INDIA</Link>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <Link to={"tel:(+91) 2622 222759"} className='text-decoration-none hover_name'> <span className='fs-5 pe-1'><BiSolidPhoneCall /></span> (+91) 2622 222759 </Link>
            </div>
            <div className='pera pt-1 pt-md-2'>
              <Link to={"mailto:info@vimalagro.com"} className='text-decoration-none hover_name'> <span className='fs-5 pe-1'><FaMailBulk /></span> info@vimalagro.com </Link>
            </div>

          </div>
        </div>
        <div className='border-top text-center pera mt-3 mt-lg-4 pt-2'>
          © copyright 2025 Vimal Agro Products Pvt Ltd
        </div>
      </div>
    </div>
  )
}

export default Footer