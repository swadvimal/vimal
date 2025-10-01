import { useNavigate, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HOC from '../HOC';
import { useEffect, useState } from 'react';
import Howtouse from './Howtouse';
import ProductSlider from './Slider';
import axios from 'axios';
import { BiSolidRightArrowCircle } from 'react-icons/bi';

function SubProducts() {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setSubProduct] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [extraSubProducts, setExtraSubProducts] = useState([]);
    const [extraSubheading, setExtraSubheading] = useState([]);
    const [selectedExtraWeight, setSelectedExtraWeight] = useState(null);
    const [selectedMainWeight, setSelectedMainWeight] = useState(null);
    const [selectedSubtypeWeights, setSelectedSubtypeWeights] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const navigate = useNavigate();
    const { id } = useParams();

    // ✅ Update screen size on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ Fetch extra subproducts
    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/api/extrasubproducts")
            .then((res) => {
                setExtraSubProducts(res.data || []);
            })
            .catch((err) => console.error("Error fetching extra subproducts:", err));
    }, []);

    // ✅ Fetch extra subheadings
    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/api/heading")
            .then((res) => {
                setExtraSubheading(res.data || []);
            })
            .catch((err) => console.error("Error fetching extra heading:", err));
    }, []);

    // ✅ Fetch button visibility
    useEffect(() => {
        axios
            .get("https://backendvimalagro.onrender.com/view/btn")
            .then((res) => {
                setIsVisible(res.data?.isVisible || false);
            })
            .catch((err) => console.error("Error fetching button visibility:", err));
    }, []);

    // ✅ Fetch products
    useEffect(() => {
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
        FetchProduct();
    }, []);

    const product = products.find((p) => p._id == id);

    // ✅ Parse weight to grams for sorting
    const parseWeight = (w) => {
        const num = parseFloat(w.replace(/[^\d.]/g, ""));
        if (w.toLowerCase().includes("kg")) return num * 1000;
        return num;
    };

    // ✅ Unique main weights
    const uniqueMainWeights = Array.from(
        new Set(
            (product?.subproducts || []).flatMap((item) =>
                item.weight
                    ? item.weight.split(",").map((w) => w.trim().toLowerCase())
                    : []
            )
        )
    ).sort((a, b) => parseWeight(a) - parseWeight(b));

    // ✅ Select first main weight automatically
    useEffect(() => {
        if (product && uniqueMainWeights.length > 0 && !selectedMainWeight) {
            setSelectedMainWeight(uniqueMainWeights[0]);
        }
    }, [product, uniqueMainWeights, selectedMainWeight]);

    // ✅ Filtered main subproducts
    const filteredMainSubProducts = selectedMainWeight
        ? (product?.subproducts || []).filter((item) =>
            item.weight
                ?.split(",")
                .map((w) => w.trim().toLowerCase())
                .includes(selectedMainWeight)
        )
        : product?.subproducts || [];

    // ✅ Matched extra products
    const matchedExtras = extraSubProducts.filter(
        (extra) => extra.productId?._id === product?._id
    );

    // ✅ Filter extra subheadings for this product
    const filtered = extraSubheading
        .filter((item) => item.productId?._id === id)
        .map((item) => item.subproductTitle);

    // ✅ Handle Load More
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    // ✅ Select default extra weight
    useEffect(() => {
        if (matchedExtras.length > 0) {
            const allExtraItems = matchedExtras.flatMap(
                (extra) => extra.extrasubproducts
            );

            const allWeights = allExtraItems.flatMap((item) =>
                item.weight
                    ? item.weight.split(",").map((w) => w.trim().toLowerCase())
                    : []
            );

            const uniqueExtraWeights = Array.from(new Set(allWeights)).sort(
                (a, b) => parseWeight(a) - parseWeight(b)
            );

            if (uniqueExtraWeights.length > 0 && !selectedExtraWeight) {
                setSelectedExtraWeight(uniqueExtraWeights[0]);
            }
        }
    }, [matchedExtras, selectedExtraWeight]);

    // ✅ If no product found
    if (!product) {
        return (
            <div className="text-center d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <img src={require("../../assets/Images/loader.gif")} className='img-fluid' alt="" />
            </div>
        );
    }

    return (
        <div className='mt-5'>
            {/* Product Banner */}
            {console.log(product)}
            <div >
                <div className="d-none d-lg-block  mt-5">
                    <img src={product.productBanner} alt="" className="img-fluid w-100 h-100 " />
                </div>
                <div className="d-block d-lg-none  mt-5">
                    <img src={product.productBannerMobile} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
            </div>
            <div className='py-2 py-md-4' style={{ backgroundColor: "#fffcf3" }}>
                <div className=''>
                    <div className='container-xxl'>
                        <div>
                            <div className='row justify-content-center'>

                                {/* Banner 2 */}
                                <div>
                                    <div className="d-none d-lg-block">
                                        <img src={product.banner2} alt="" className="img-fluid w-100 h-100 " />
                                    </div>
                                    <div className="d-block d-lg-none">
                                        <img src={product.banner2Mobile} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-auto text-center col-sm-8 col-11 py-2 '>
                    {/* Product Name */}
                    <h2 className='fw-bold my-1 my-lg-4 ftittle'>Power of {product.productName}</h2>
                    <p className='px-2 px-lg-5'>{product.powerdesc}</p>
                    <div className="w-75 mx-auto pb-3 text-capitalize">
                        {product.productSizes.map((x, i) => (
                            <span
                                key={i}
                                className={`subproduct-size fw-bold mt-1 size-item ${i === product.productSizes.length - 1 ? "last" : ""}`}
                            >
                                {x}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='pt-1 pt-md-2'>
                    <h3 className='mt-1 mt-lg-5 text-center text-dark text-uppercase fw-bold ftittle'>{product.productName}</h3>
                </div>

                {/* {uniqueMainWeights.length > 0 && (
                    <div className="row justify-content-center pt-1 pt-md-3 flex-wrap gx-0 gap-2">
                        <div
                            className="col-auto mt-1"
                            onClick={() => setSelectedMainWeight(null)}
                        >
                            <div
                                className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === null ? "active-btn" : ""
                                    }`}
                            >
                                All
                            </div>
                        </div>

                        {uniqueMainWeights.map((weight, idx) => (
                            <div
                                key={idx}
                                className="col-auto mt-1"
                                onClick={() => setSelectedMainWeight(weight)}
                            >
                                <div
                                    className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === weight ? "active-btn" : ""
                                        }`}
                                >
                                    {weight}
                                </div>
                            </div>
                        ))}
                    </div>
                )} */}
                {uniqueMainWeights.length > 0 && (
                    <div className="row justify-content-center pt-3 pb-3 flex-wrap gx-0 gap-2">
                        {uniqueMainWeights.map((weight, idx) => (
                            <div
                                key={idx}
                                className="col-auto mt-1"
                                onClick={() => setSelectedMainWeight(weight)}
                            >
                                <div
                                    style={{ cursor: "pointer" }}
                                    className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedMainWeight === weight ? "active-btn" : ""
                                        }`}
                                >
                                    {weight}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Display Main Subproducts */}
                <div className="container py-2 py-md-5">
                    <div className="row justify-content-center">
                        {(window.innerWidth < 768
                            ? filteredMainSubProducts.slice(0, visibleCount) // sm screen => show limited
                            : filteredMainSubProducts) // md/lg => show all
                            .map((item, index) => (
                                <div key={index} className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex">
                                    <div className="card shadow-sm w-100 h-100 text-center p-1 pb-md-3">
                                        {/* Subproduct Image */}
                                        <img src={item.subproductImg} alt="" className='img-fluid product_sizeimg' style={{ objectFit: 'contain' }} />
                                        <div className='fw-semibold subp pt-2 p-1 text-capitalize' style={{ fontSize: "14px" }}>
                                            {/* Subproduct Name */}
                                            {item.subproductName}
                                        </div>
                                        <div
                                            onClick={() => navigate(`/product/${id}/${item._id}`)}
                                            className={`subbtn mt-auto ${!isVisible ? "d-none" : ""}`}
                                            style={{ padding: "10px 10px" }}
                                        >
                                            <button className="rounded-pill px-4 py-2 fw-bold mt-2 text-white" style={{ background: "var(--red)", border: "2px solid var(--ofwhite)", fontSize: "15px" }}>View More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                {/* Load More Button */}
                {window.innerWidth < 768 && visibleCount < filteredMainSubProducts.length && (
                    <div className="text-center mb-4 mb-md-0">
                        <button
                            onClick={handleLoadMore}
                            className="btn fw-bold px-4 py-2 rounded-pill text-white"
                            style={{ background: "var(--red)", fontSize: "15px" }}
                        >
                            Load More <BiSolidRightArrowCircle className='ms-2' />
                        </button>
                    </div>
                )}

                {/* only for pickels */}
                {matchedExtras.length > 0 && (
                    <div className="my-2 my-md-5">
                        <h3 className="mt-1 mt-md-3 text-center text-dark text-uppercase fw-bold ftittle">
                            {/* Extra Subproducts of {product.productName} */}
                            {filtered.map((title, i) => (
                                <li key={i}>{title}</li>
                            ))}
                        </h3>

                        {/* 1. Collect ALL extraSubProducts for this product */}
                        {/* {(() => {
                            const allExtraItems = matchedExtras.flatMap(extra => extra.extrasubproducts);

                            const uniqueExtraWeights = Array.from(
                                new Set(allExtraItems.map(item => item.weight))
                            );

                            const filteredExtraItems = selectedExtraWeight
                                ? allExtraItems.filter(item => item.weight === selectedExtraWeight)
                                : allExtraItems;

                            return (
                                <>
                                  
                                    {uniqueExtraWeights.length > 0 && (
                                        <div className="text-center pt-1 pt-md-3 d-block d-lg-flex align-items-center justify-content-center">
                                          
                                            <div
                                                className="border-0 bg-transparent mx-2 mt-2 mt-md-3"
                                                onClick={() => setSelectedExtraWeight(null)}
                                            >
                                                <div
                                                    className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedExtraWeight === null ? "active-btn" : ""
                                                        }`}
                                                >
                                                    All
                                                </div>
                                            </div>

                                            {uniqueExtraWeights.map((weight, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-0 bg-transparent mx-2 mt-2 mt-md-3"
                                                    onClick={() => setSelectedExtraWeight(weight)}
                                                >
                                                    <div
                                                        className={`p-2 rounded-pill px-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedExtraWeight === weight ? "active-btn" : ""
                                                            }`}
                                                    >
                                                        {weight}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="container py-3 py-md-5">
                                        <div className="row justify-content-center">
                                            {console.log(filteredExtraItems)
                                            }
                                            {filteredExtraItems.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex"
                                                >
                                                    <div className="card shadow-sm w-100 h-100 text-center p-1 pb-md-3">
                                            
                                                        <img
                                                            src={item.subproductImg}
                                                            alt={item.subproductName}
                                                            className="img-fluid product_sizeimg"
                                                            style={{ objectFit: "contain" }}
                                                        />
                                                   
                                                        <div
                                                            className="fw-semibold subp pt-2 p-1"
                                                            style={{ fontSize: "14px" }}
                                                        >
                                                            {item.subproductName}
                                                        </div>
                                                 
                                                        <div
                                                            onClick={() => navigate(`/product/${id}/${item._id}`)}
                                                            className={`subbtn mt-auto ${!isVisible ? "d-none" : ""
                                                                }`}
                                                        >
                                                            <button className="rounded-pill px-4 py-2 fw-bold mt-2 text-white" style={{ background: "var(--red)", border: "2px solid var(--ofwhite)", fontSize: "15px" }}>View More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );
                        })()} */}
                        {(() => {
                            // ✅ Collect all extra subproducts for this product
                            const allExtraItems = matchedExtras.flatMap(extra => extra.extrasubproducts);

                            // ✅ Extract all weights (split by comma) & normalize
                            const allWeights = allExtraItems.flatMap(item =>
                                item.weight
                                    ? item.weight.split(",").map(w => w.trim().toLowerCase())
                                    : []
                            );

                            // ✅ Unique sorted weights
                            const uniqueExtraWeights = Array.from(new Set(allWeights)).sort((a, b) => {
                                const parseWeight = (w) => {
                                    const num = parseFloat(w.replace(/[^\d.]/g, ""));
                                    if (w.includes("kg")) return num * 1000;
                                    return num;
                                };
                                return parseWeight(a) - parseWeight(b);
                            });

                            // ✅ Filter extra items by selected weight
                            const filteredExtraItems = selectedExtraWeight
                                ? allExtraItems.filter(item =>
                                    item.weight
                                        ?.split(",")
                                        .map(w => w.trim().toLowerCase())
                                        .includes(selectedExtraWeight)
                                )
                                : allExtraItems;

                            return (
                                <>

                                    {/* Tabs */}
                                    {uniqueExtraWeights.length > 0 && (
                                        <div className="row justify-content-center pt-3 flex-wrap gx-0 gap-2">
                                            {uniqueExtraWeights.map((weight, idx) => (
                                                <div
                                                    key={idx}
                                                    className="col-auto mt-1"
                                                    onClick={() => setSelectedExtraWeight(weight)}
                                                >
                                                    <div
                                                        style={{ cursor: "pointer" }}
                                                        className={`p-2 rounded-pill px-3 px-md-5 shadow-sm btn_active bg-transparent text-uppercase ${selectedExtraWeight === weight ? "active-btn" : ""
                                                            }`}
                                                    >
                                                        {weight}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Products Grid */}
                                    <div className="container py-3 py-md-5">
                                        <div className="row justify-content-center">
                                            {(window.innerWidth < 768
                                                ? filteredExtraItems.slice(0, visibleCount) // sm screen => limited
                                                : filteredExtraItems) // md/lg => show all
                                                .map((item, index) => (
                                                    <div key={index} className="col-6 col-md-4 custom-col-lg-5 mb-4 d-flex">
                                                        <div className="card shadow-sm w-100 h-100 text-center p-1 pb-md-3">
                                                            {/* Image */}
                                                            <img
                                                                src={item.subproductImg}
                                                                alt={item.subproductName}
                                                                className="img-fluid product_sizeimg"
                                                                style={{ objectFit: "contain" }}
                                                            />
                                                            {/* Name */}
                                                            <div className="fw-semibold subp pt-2 p-1 text-capitalize" style={{ fontSize: "14px" }}>
                                                                {item.subproductName}
                                                            </div>
                                                            {/* Button */}
                                                            <div
                                                                onClick={() => navigate(`/product/${id}/${item._id}`)}
                                                                className={`subbtn mt-auto ${!isVisible ? "d-none" : ""}`}
                                                            >
                                                                <button
                                                                    className="rounded-pill px-4 py-2 fw-bold mt-2 text-white"
                                                                    style={{
                                                                        background: "var(--red)",
                                                                        border: "2px solid var(--ofwhite)",
                                                                        fontSize: "15px",
                                                                    }}
                                                                >
                                                                    View More
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>

                                        {/* Load More Button for small screens */}
                                        {window.innerWidth < 768 && visibleCount < filteredExtraItems.length && (
                                            <div className="text-center mb-4 mb-md-0">
                                                <button
                                                    onClick={handleLoadMore}
                                                    className="btn fw-bold px-4 py-2 rounded-pill text-white"
                                                    style={{ background: "var(--red)", fontSize: "15px" }}
                                                >
                                                    Load More <BiSolidRightArrowCircle className='ms-2' />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </>
                            );
                        })()}

                    </div>
                )}
            </div>
            {/* Footer Components */}
            <Howtouse banner={product.howToMakeBanner} bannerMobile={product.howToMakeBannerMobile} />
            <ProductSlider />
        </div>
    );
}

export default HOC(SubProducts)