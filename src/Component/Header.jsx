import { useState, useEffect, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDropdownCircle, IoMdArrowDropdown } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { LuAlignRight } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const [products, setProducts] = useState([])
    const FetchProduct = async () => {
        try {
            const res = await axios.get(
                "https://backendvimalagro.onrender.com/api/products"
            );
            setProducts(res.data || []);

        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);


    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowDropdown(prev => !prev);
    };

    const closeAll = () => {
        setIsOpen(false);
        setShowDropdown(false);
    };
    // Inside your component
    const isDesktop = window.innerWidth >= 768;

    // Desktop dropdown handlers
    const handleMouseEnter = () => {
        if (isDesktop) setShowDropdown(true);
    };
    const handleMouseLeave = () => {
        if (isDesktop) setShowDropdown(false);
    };
    // Auto-close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    if (location.pathname === '/product') { }
    return (
        <div className='bg-white w-100 position-fixed top-0' style={{ zIndex: 2000000 }}>
            <nav className="bg-white fstyle navbar navbar-expand-md fixed-top shadow">
                <div className='container-fluid ms-sm-5 ms-3'>

                    {/* Logo */}
                    <Link className="navbar-brand me-0" to="/">
                        <img
                            src={require('../assets/Images/logo_vimal_agro.png')}
                            alt="Logo"
                            className="img-fluid object-fit-cover logo"
                            style={{ filter: "drop-shadow(-11px 11px 11px #0000002d)", position: 'relative', top: '24px' }}
                        />
                    </Link>

                    {/* Toggler Button */}
                    <button
                        className="navbar-toggler ms-auto py-sm-3 py-0 text-warning"
                        type="button"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon text-warning mt-1">
                            {isOpen ? <IoCloseSharp className='text-light fs-3' /> : <LuAlignRight className='fs-3' />}
                        </span>
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={`offcanvas offcanvas-end d-block d-md-none ${isOpen ? 'show' : ''}`}
                        style={{
                            width: '100%',
                            background: '#6103038c',
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                            visibility: "visible",
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        <div className='ms-auto bg-light h-100' style={{ width: '250px' }}>
                            <div className="offcanvas-header justify-content-end p-3">
                                <button className="btn" onClick={closeAll}>
                                    <IoCloseSharp className='fs-3' />
                                </button>
                            </div>
                            <div className="offcanvas-body p-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeAll}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/aboutus" ? "active" : ""}`} to="/aboutus" onClick={closeAll}>About</Link>
                                    </li>
                                    <li className="nav-item text-center position-relative w-100" ref={dropdownRef}>
                                        <div className="">
                                            <Link className={`nav-link w-100 d-inline-block ${location.pathname === "/product" ? "active" : ""}`} to="/product" onClick={closeAll}>
                                                Product   <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
                                                    <IoMdArrowDropdown />
                                                </span>
                                            </Link>

                                        </div>
                                        {showDropdown && (

                                            <ul className="list-unstyled mt-2 bg-white shadow rounded py-2 px-1 w-100">
                                                {products.map((p, i) => (
                                                    <li key={i} className=' dropdown_color list-unstyled py-1 ps-2 text-break'>
                                                        <Link to={`/product/${p._id}`} className="dropdown-item  text-break text-wrap" style={{ fontSize: "12px" }} onClick={closeAll}>
                                                            {p.productName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/blog" ? "active" : ""}`} to="/blog" onClick={closeAll}>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-center ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" onClick={closeAll}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-collapse d-md-block d-none justify-content-end pb-1" id="navbarNav">
                        <ul className="navbar-nav pt-3 px-3 ulbg">
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 ${location.pathname === "/" ? "active" : ""}`} to="/">
                                    <FaHome className='fs-4' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/aboutus" ? "active" : ""}`} to="/aboutus">About</Link>
                            </li>
                            <li
                                className="nav-item position-relative d-flex align-items-center"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={dropdownRef}
                            >
                                <Link
                                    className={`nav-link px-3 mx-1 fs-6 producthover ${location.pathname.startsWith("/product") ? "active" : ""
                                        }`}
                                    to="/product"
                                >
                                    Product <IoIosArrowDropdownCircle />
                                </Link>

                                {showDropdown && (
                                    <ul className="position-absolute translate-middle-x start-50 bg-white shadow rounded p-2" style={{ top: "100%", left: "-50%", zIndex: 5 }}>
                                        {products.map((p, i) => (
                                            <li key={i} className='dropdown_color list-unstyled py-1 ps-2 pe-1'>
                                                <Link to={`/product/${p._id}`} className="dropdown-item pera" onClick={closeAll}>
                                                    {p.productName}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/blog" ? "active" : ""}`} to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link px-4 mx-1 fs-6 ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header