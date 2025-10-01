import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { FaFileDownload, FaMailBulk } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import brochurePDF from '../assets/Images/groser.pdf';

function HOC(Component) {
  function NewComponent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />

        {/* Floating Social Nav */}
        <div
          className={`social_Nav ${isVisible ? "show" : "hide"}`}
          style={{ zIndex: 30000 }}
        >
          <ul>
            <li>
              <a href="tel:(+91) 2622 222759" className="sideNavIcon_tittle">
                <div className="side_Nav_Icon order-0">
                  <BiSolidPhoneCall />
                </div>
                <span className="order-1">(+91) 2622 222759</span>
              </a>
            </li> 
            <li>
              <a href="mailto:swad.vimal.gj@gmail.com" className="sideNavIcon_tittle">
                <div className="side_Nav_Icon order-0">
                  <FaMailBulk />
                </div>
                <span className="order-1">swad.vimal.gj@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href={brochurePDF}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="sideNavIcon_tittle"
              >
                <div className="side_Nav_Icon order-0">
                  <FaFileDownload />
                </div>
                <span className="order-1">Download Brochure</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <main className="flex-fill">
          <Component />
        </main>

        {/* Footer at bottom always */}
        <Footer />
      </div>
    );
  }

  return NewComponent;
}

export default HOC;
