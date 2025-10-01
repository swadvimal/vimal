import React, { useState } from 'react';
import Tittles from '../Tittles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandProduct } from './BrandProductList';

function ProductBrand() {
    const [activeBrand, setActiveBrand] = useState(null);

    const handleBrandClick = (brand) => {
        setActiveBrand(brand);
    };

    return (
        <>
            <div className='py-md-5 p-3 category_bgimg'>
                <div className='container my-1 my-md-5'>
                    <div className='text-center'>
                        <Tittles stitle={"Our Brand"} ltitle={"Leading the market with quality and trust"} />
                    </div>

                    <div className="row  mt-2 mt-md-4 d-flex justify-content-center align-items-center mx-auto product-brand_bg shadow-lg rounded-4 p-2 p-lg-5">
                        {BrandProduct.map((item, index) => (
                            <div key={index} className='col-lg-3 col-6 px-0 '>
                                <div className='h-100 brand-card position-relative m-2' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                    <div className='bg-white p-lg-3 p-2  rounded-4 h-100 d-flex justify-content-center align-items-center brand-box'>
                                        <div className="brand-img-wrapper">
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className="brand-main-img img-fluid rounded-4 p-0 p-md-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductBrand;