import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';
import { TiShoppingCart } from 'react-icons/ti';

function Counter() {

    const [counterData, setCounterData] = useState({
        customers: 0,
        products: 0,
        countries: 0,
    });

    const sanitizeNumber = (value) => {
        if (!value) return 0;
        const cleaned = String(value).replace(/[^\d]/g, ""); // remove non-digits
        return parseInt(cleaned, 10) || 0;
    };

    // helper function for Indian number format
    const formatIndian = (num) => {
        return new Intl.NumberFormat("en-IN").format(num);
    };

    useEffect(() => {
        fetch("https://vimalagro-backend.onrender.com/counter")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0 && data[0].value && data[0].value.length > 0) {
                    const { customers, products, countries } = data[0].value[0];
                    setCounterData({
                        customers: sanitizeNumber(customers),
                        products: sanitizeNumber(products),
                        countries: sanitizeNumber(countries),
                    });
                }
            })
            .catch((err) => console.error("Error fetching counter data:", err));
    }, []);

    return (
        <>
            <div className="container bg-white pt-3 pt-lg-5">
                <div className="row justify-content-center bg-white mx-1">
                    <div className="col-4 col-md-6 col-lg-4  mt-3 m-0  p-1 p-md-3 ps-0 ps-md-2"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-delay="50"
                        data-aos-once="true">
                        <div className="h-100 shadow p-0 p-lg-3 pb-2 pb-md-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-block d-md-flex align-items-center justify-content-center text-center text-md-start'>
                                <div className='fw-bold p-0 p-md-3 pt-0 pt-md-1 countericon'><RiEmotionHappyLine /></div>
                                <div className='p-2 text-md-start text-center d-block d-lg-flex flex-column justify-content-center'>
                                    <div>
                                        <h2 className='countnumber text-md-start text-center fw-bold'>
                                            <CountUp end={counterData.customers} enableScrollSpy
                                                formattingFn={formatIndian} separator="" /> +</h2>
                                    </div>
                                    <div className='counter_name fw-bold text-md-start text-center'>Happy Customers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4  mt-3 m-0  p-1 p-md-3"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-delay="150"
                        data-aos-once="true">
                        <div className="h-100 shadow p-0 p-lg-3 pb-2 pb-md-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-block d-md-flex align-items-center justify-content-center text-center text-md-start'>
                                <div className='fw-bold p-0 p-md-3 pt-0 pt-md-1 countericon'><TiShoppingCart /></div>
                                <div className='p-2 text-md-start text-center d-block d-lg-flex flex-column justify-content-center'>
                                    <div>
                                        <h2 className='countnumber text-md-start text-center fw-bold'> <CountUp end={counterData.products} enableScrollSpy
                                            formattingFn={formatIndian} separator="" /> +</h2></div>
                                    <div className='counter_name fw-bold text-md-start text-center'>Popular Product</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4  mt-3 m-0  p-1 p-md-3"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-delay="350"
                        data-aos-once="true">
                        <div className="h-100 shadow p-0 p-lg-3 pb-2 pb-md-3 rounded-5 text-white" style={{ backgroundColor: "var(--red)" }}>
                            <div className='d-block d-md-flex align-items-center justify-content-center text-center text-md-start'>
                                <div className='fw-bold p-0 p-md-3 pt-0 pt-md-1 countericon'><TbWorld /></div>
                                <div className='p-2 text-md-start text-center d-block d-lg-flex flex-column justify-content-center'>
                                    <div>
                                        <h2 className='countnumber text-md-start text-center fw-bold'> <CountUp end={counterData.countries} enableScrollSpy
                                            formattingFn={formatIndian} separator="" /> +</h2></div>
                                    <div className='counter_name fw-bold text-md-start text-center'>More Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counter