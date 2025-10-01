import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { BiSolidRightArrowCircle } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight, FaLeaf } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';

function ProductSlider() {
    const [isVisible, setIsVisible] = useState(false);
    const [products, setSubProduct] = useState([]);
    const sliderRef = useRef();

    const { id } = useParams();

    // ✅ Fetch visibility toggle
    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/view/btn")
            .then((res) => {
                setIsVisible(res.data?.isVisible || false);
            })
            .catch((err) => console.error("Error fetching button visibility:", err));
    }, []);

    // ✅ Fetch products
    const FetchProduct = async () => {
        try {
            const res = await axios.get(
                "https://backendvimalagro.onrender.com/api/products"
            );
            setSubProduct(res.data || []);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
    }, []);

    const product = products.find((p) => p._id == id);

    // ✅ If product not found
    if (!product) return <p>No product found.</p>;

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    };


    return (
        <>
            <div className="d-sm-block d-none">
                <div className="container bg-white">
                    <div className="row">
                        <div className="col-12 order-lg-0 order-1">
                            <div className="row align-items-end justify-content-end ">
                                <div className="col-lg-10 px-0 recepieslider">
                                    <Slider ref={sliderRef}  {...settings}>
                                        {product.recipes.map((item, index) => (
                                            <div key={index}>
                                                <div className="row justify-content-end align-items-center animate-slide">
                                                    <div className="col-lg-4 col-md-6 text-center position-relative">
                                                        <div className="productbgred mx-auto" >
                                                            <div className='text-start ms-4 pt-4 pt-md-5'>
                                                                <img src={item.recipeMainImg} alt="" className='image1 rounded-circle object-fit-cover' />
                                                            </div>
                                                            <div className='text-end'>
                                                                <img src={item.recipeSubImg} alt="" className='image2 rounded-circle ms-auto me-5 bg-light object-fit-cover' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-md-6 text-start px-4">
                                                        <h3 className='display-6 fw-bold ftittle mt-1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">{item.recipeName}</h3>
                                                        <h4 className=" fw-bold stittle p-0 my-1" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                                                            Instruction
                                                        </h4>
                                                        {item.steps.map((x, i) => {
                                                            return (
                                                                <div className='pt-1 pt-0 pt-md-1 pera' key={i}>{i + 1}. {x}</div>
                                                            )
                                                        })}
                                                        <div className="my-4 mb-md-0 d-sm-none d-block">
                                                            <Link to='/blog'>
                                                                <button
                                                                    // onClick={handleLoadMore}
                                                                    className="btn fw-bold px-4 py-2 rounded-pill text-white"
                                                                    style={{ background: "var(--red)", fontSize: "15px" }}
                                                                >
                                                                    Load More <BiSolidRightArrowCircle className='ms-2' />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-start bg-transparent product-line order-0 order-lg-1" >
                            <div className='mb-2 rounded-pill me-auto' style={{ background: "var(--golden)", width: "fit-content" }} >
                                <div className='d-flex align-items-center justify-content-center p-1 '>
                                    <div className="p-1 rounded-circle" style={{ background: "white", color: 'var(--golden)' }}>
                                        <FaLeaf className='fs-5' />
                                    </div>
                                    <i className='pera mx-2 fw-bold'>Authentic
                                        Indian recipe</i>
                                </div>
                            </div>
                            <div className='fsizefont'>
                                With <span className="fw-bold" style={{ color: 'var(--golden)' }}>Vimal</span>, <br />
                                make your Food <br />
                                <span className="fw-bold" style={{ color: 'var(--golden)' }}>Quick, Easy & Flavourful</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='row justify-content-center text-center'>
                        <div className='col-sm-5 col-7 pt-0 px-3 rounded-top-5'
                            style={{ height: '60px', }}>
                            <button className="btn btn-link text-white fs-5 ms-auto mx-2 " style={{ backgroundColor: "var(--golden)" }} onClick={() => sliderRef.current?.slickPrev()}>
                                <FaChevronLeft className='' style={{ color: 'white', fontWeight: 900 }} />
                            </button>
                            <button className="btn btn-link text-white fs-5  mx-2" style={{ backgroundColor: "var(--golden)" }} onClick={() => sliderRef.current?.slickNext()}>
                                <FaChevronRight className='' style={{ color: 'white', fontWeight: 900 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 mb-md-0 d-sm-none d-block text-center">
                <Link to='/blog'>
                    <button
                        // onClick={handleLoadMore}
                        className="btn fw-bold px-4 py-2 rounded-pill text-white"
                        style={{ background: "var(--red)", fontSize: "15px" }}
                    >
                        Explore Recepie <BiSolidRightArrowCircle className='ms-2' />
                    </button>
                </Link>
            </div>

        </>
    );
}

export default ProductSlider;