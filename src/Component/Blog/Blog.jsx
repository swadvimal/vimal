import { useEffect, useRef, useState } from 'react';
import Tittles from '../Tittles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HOC from '../HOC'
import { Link } from 'react-router-dom';
import YouTubeVideo from './YouTubeVideo';
import "../../assets/Css/Blog.css";
import axios from 'axios';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ButtonCom from '../ButtonCom';

function Blog() {
    const [activeBlog, setActiveBlog] = useState("All");
    const [recipeSections, setRecipeSections] = useState([]);
    const [banner, setBanner] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    // Fetch Blogs
    const FetchProduct = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/blogs");
            setRecipeSections(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    // banner fetch
    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const res = await axios.get("https://backendvimalagro.onrender.com/blogbanner");
                if (res.data && res.data.length > 0) {
                    setBanner(res.data[0]);
                }
            } catch (err) {
                console.error("Error fetching banner:", err);
            }
        };
        fetchBanner();
    }, []);

    if (!banner) {
        return null; // loader/spinner optional
    }

    // Filter blogs by activeBlog
    const filteredBlogs =
        activeBlog === "All"
            ? recipeSections
            : recipeSections.filter(item => item.category === activeBlog);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            {/* <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
                className="landingimg mt-5 pt-md-4 pt-0"
            >
                <img
                    src={banner.desktopblogbanner}
                    alt="desktop-banner"
                    className="img-fluid w-100 d-lg-block d-none object-fit-cover"
                />
                <img
                    src={banner.mobileblogbanner}
                    alt="mobile-banner"
                    className="img-fluid w-100 d-lg-none d-block object-fit-cover"
                />
            </div> */}
            <div>
                <div className="d-none d-lg-block  mt-5">
                    <img src={banner.desktopblogbanner} alt="" className="img-fluid w-100 h-100 " />
                </div>
                <div className="d-block d-lg-none  mt-5">
                    <img src={banner.mobileblogbanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
            </div>
            {/* Blogs Section */}
            <div className="py-4 py-md-5 p-1 category_bgimg overflow-hidden" style={{ backgroundAttachment: "fixed" }}>
                <div className="container-lg">
                    <div className="text-center">
                        <Tittles stitle={"Our Blogs"} ltitle={"Leading the market with quality and trust"} />
                    </div>

                    {/* Blog Cards */}
                    <div className="row justify-content-center mx-auto">
                        {currentBlogs.map((item) => (
                            <div key={item._id} className="col-12 col-lg-3 col-md-6 mt-sm-4 mt-3 d-flex fade-in">
                                <div className="card h-100 w-100">
                                    <div style={{ height: 180 }} className='shadow'>
                                        <img src={item.blogImage} alt={item.title} className="card-img-top img-fluid w-100 h-100 object-fit-cover" />
                                    </div>

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-capitalize">{item.title}</h5>
                                        <p className="card-text flex-grow-1 pera">{item.description}</p>
                                        <Link to={`/Recepie/${item._id}`}>
                                            <ButtonCom btn={"How To Make ?"} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-center align-items-center mt-4 flex-wrap" >
                        <button
                            className="btn btn-outline-dark mx-1 rounded-circle p-1 d-flex justify-content-center align-items-center" style={{ width: "20px", height: "20px" }}
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <GrPrevious />
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`btn mx-1 d-flex justify-content-center align-items-center pt-2 ${currentPage === index + 1 ? "btn-dark" : "btn-outline-dark"}`}
                                onClick={() => handlePageChange(index + 1)}
                                style={{ width: "25px", height: "25px" }}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            className="btn btn-outline-dark mx-1 rounded-circle p-1 d-flex justify-content-center align-items-center" style={{ width: "20px", height: "20px" }}
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>

            <YouTubeVideo />
        </>
    );
}

export default HOC(Blog)