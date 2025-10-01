import HOC from "../HOC";
import { useNavigate, useParams } from "react-router-dom";
import Tittles from "../Tittles";
import { useEffect, useState } from "react";
import ButtonCom from "../ButtonCom";
import axios from "axios";

function SpecificSubPro() {
    const { id, proid } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [extraSubProducts, setExtraSubProducts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    // ✅ Fetch products
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

    // ✅ Fetch extra subproducts
    const FetchExtraSub = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/extrasubproducts");
            setExtraSubProducts(res.data || []);
        } catch (err) {
            console.error("Error fetching extra subproducts:", err);
        }
    };

    useEffect(() => {
        FetchProduct();
        FetchExtraSub();
        setIsVisible(true);
    }, []);

    // ✅ Find main product
    const product = products.find((p) => p._id === id);

    if (!product) return <p>Loading product...</p>;

    // ✅ Check inside main subproducts
    let matchedSub =
        product?.subproducts?.find((item) => item._id === proid) || null;

    // ✅ If not found, check inside extra subproducts
    if (!matchedSub) {
        const extrasForProduct = extraSubProducts.filter(
            (extra) => extra.productId?._id === product._id
        );
        extrasForProduct.forEach((extra) => {
            const found = extra.extrasubproducts.find((item) => item._id === proid);
            if (found) matchedSub = found;
        });
    }

    if (!matchedSub) return <p>No subproduct found.</p>;

    return (
        <div className="red-certificates-section">
            {/* ✅ Subproduct details in div */}
            <div className="container red-circle">
                <section className={`py-5 ${isVisible ? "visible" : ""}`}>
                    <div className="row align-items-center justify-content-center rounded-4 my-3 ">
                        <div className="col-lg-4 col-md-6 col-sm-7 col-10">
                            <div className="test-shine">
                                <img
                                    src={matchedSub.subproductImg}
                                    alt={matchedSub.subproductName}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-sm-12 lh-lg mt-md-0 mt-4"
                            style={{ textAlign: "justify" }}
                        >
                            <Tittles stitle={matchedSub.subproductName} />
                            <div className="lh-base ps-2 mt-3 fw-lighter pera">
                                {matchedSub.description}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* ✅ Related products */}
            {/* <div className="container pb-4">
                <div className="text-center pb-3">
                    <Tittles stitle="Related Products" />
                </div>
                <div className="row g-3 justify-content-center">
                    {product.subproducts
                        .filter((item) => item._id !== proid)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="col-6 col-md-4 col-lg-3 fade-in mt-3"
                            >
                                <div
                                    className="h-100 shadow text-center p-1 p-lg-3 rounded-4"
                                    style={{ backgroundColor: "#fffcf3", cursor: "pointer" }}
                                >
                                    <img
                                        src={item.subproductImg}
                                        alt={item.subproductName}
                                        className="img-fluid"
                                        style={{ height: "200px" }}
                                    />
                                    <div className="fw-semibold subp pt-2 p-1 fs-6">
                                        {item.subproductName}
                                    </div>
                                    <div onClick={() => navigate(`/product/${id}/${item._id}`)}>
                                        <ButtonCom btn="View More" />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div> */}
        </div>
    );
}

export default HOC(SpecificSubPro);
