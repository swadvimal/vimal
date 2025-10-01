// import React from 'react'
// import Tittles from '../Tittles'

// function Principals() {
//     return (
//         <div className='py-1 py-md-5'>
//             <div className='container-lg'>
//                 <div className="col-11 mx-auto">
//                     {/* <h1>OUR PRINCIPLES</h1>*/}
//                     <div className='brdstart'>
//                         <Tittles stitle={"OUR PRINCIPLES"} ltitle="Lorem ipsum dolor sit amet" />
//                     </div>

//                     <p className='mt-2  pera'>The success of Passage Foods is the result of following these three principles:</p>

//                     <div className='row'>
//                         {/* <div className='text-end littleimg1' style={{
//                             position: "relative",
//                             bottom: "0px",
//                             right: '-60px',
//                             // zIndex: "-1",
//                             height: '0px'
//                         }}>
//                             <img src={require('../../assets/Images/11436576.png')} style={{ height: '100px' }} alt="" />
//                         </div> */}
//                         <div className='col-md-6 p-lg-5 p-0 principalimg'>
//                             <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid object-fit-cover shadow ' />
//                         </div>
//                         <div className='col-md-6 p-lg-5 p-0 principaltext mb-3 mb-md-0'>
//                             <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
//                                 color: " ",
//                                 WebkitTextStroke: "1px var(--golden)",
//                                 WebkitFontSmoothing: "antialiased",
//                                 MozOsxFontSmoothing: "grayscale",
//                                 textRendering: "optimizeLegibility",

//                                 position: "relative",
//                                 top: "38px",
//                                 right: '30px',
//                                 zIndex: "-1"

//                             }}>ONE</div>
//                             <h3 className='fw-bold stittle  text-uppercase' style={{ letterSpacing: '1px' }}>QUALITY FIRST</h3>
//                             <p className='pera mb-0'>Deliver only products that meet the highest standards of purity and taste.</p>
//                         </div>
//                     </div>

//                     <div className='row'>
//                         <div className='col-md-6 p-lg-5 p-0 principaltext mb-3 mb-md-0 order-md-0 order-1'>
//                             <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
//                                 color: " ",
//                                 WebkitTextStroke: "1px var(--golden)",
//                                 WebkitFontSmoothing: "antialiased",
//                                 MozOsxFontSmoothing: "grayscale",
//                                 textRendering: "optimizeLegibility",

//                                 position: "relative",
//                                 top: "38px",
//                                 right: '30px',
//                                 zIndex: "-1"

//                             }}>TWO</div>
//                             <h3 className='fw-bold stittle text-uppercase' style={{ letterSpacing: '1px' }}>Customer-Centric</h3>
//                             <p className='pera mb-0'>Every decision revolves around the trust and satisfaction of our customers.</p>
//                         </div>
//                         <div className='col-md-6 p-lg-5 p-0 principalimg'>
//                             <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid img-fluid object-fit-cover shadow' />
//                         </div>
//                     </div>
//                     {/* <div className='text-start  littleimg1 littleimg2' style={{
//                         position: "relative",
//                         bottom: "50px",
//                         right: '50px',
//                         // zIndex: "-1",
//                         height: '0px'
//                     }}>
//                         <img src={require('../../assets/Images/sweet-mango-cubes-bowl-image-on-transparent-background-png-removebg-preview.png')} style={{ height: '100px' }} alt="" className='img-fluid ' />
//                     </div> */}
//                     <div className='row'>
//                         <div className='col-md-6 p-lg-5 p-0 principalimg'>
//                             <img src={require('../../assets/Images/recepi1.jpg')} style={{ minHeight: "300px", height: '100%', width: "auto" }} alt="" className='img-fluid object-fit-cover shadow ' />
//                         </div>
//                         <div className='col-md-6 p-lg-5 p-0 principaltext mb-3 mb-md-0'>
//                             <div className='h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8' style={{
//                                 color: " ",
//                                 WebkitTextStroke: "1px var(--golden)",
//                                 WebkitFontSmoothing: "antialiased",
//                                 MozOsxFontSmoothing: "grayscale",
//                                 textRendering: "optimizeLegibility",

//                                 position: "relative",
//                                 top: "38px",
//                                 right: '30px',
//                                 zIndex: "-1"

//                             }}>THREE</div>
//                             <h3 className='fw-bold stittle text-uppercase' style={{ letterSpacing: '1px' }}>Integrity</h3>
//                             <p className='pera mb-0'>Doing the right thing, always.</p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className='text-end littleimg1' style={{
//                     position: "relative",
//                     bottom: "100px",
//                     right: '-50px',
//                     // zIndex: "-1",
//                     height: '0px'
//                 }}>
//                     <img src={require('../../assets/Images/principal-little-1.png')} style={{ height: '100px' }} alt="" />
//                 </div> */}
//             </div >
//         </div >
//     )
// }

// export default Principals;


import React, { useEffect, useState } from "react";
import Tittles from "../Tittles";

function Principals() {
    const [principles, setPrinciples] = useState([]);

    useEffect(() => {
        fetch("https://vimalagro-backend.onrender.com/principle")
            .then((res) => res.json())
            .then((data) => setPrinciples(data))
            .catch((err) => console.error("Error fetching principles:", err));
    }, []);

    return (
        <div className="py-1 py-md-5">
            <div className="container-lg">
                <div className="col-11 mx-auto">
                    <div className="text-center mb-3 mb-md-0">
                        <Tittles stitle={"OUR PRINCIPLES"} />
                    </div>
                    {/* 
                    <p className="mt-2 pera">
                        The success of Passage Foods is the result of following these principles:
                    </p> */}

                    {principles.map((item, index) => (
                        <div className="row" key={item._id}>

                            {/* Alternate image/text positioning */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-md-6 p-lg-5 p-0 principalimg">
                                        <div className="test-shine">
                                            <img
                                                src={item.principleimage}
                                                alt={item.principletitle}
                                              style={{
    width: "100%",
    height: "300px",       // fixed display height for consistency
    objectFit: "cover",    // keeps aspect ratio while covering
    borderRadius: "8px",   // optional: makes it look smoother
  }}
                                                className="img-fluid object-fit-cover shadow"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-lg-5 p-0 principaltext mb-3 mb-md-0">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <div
                                                    className="h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8"
                                                    style={{
                                                        WebkitTextStroke: "1px var(--golden)",
                                                        WebkitFontSmoothing: "antialiased",
                                                        MozOsxFontSmoothing: "grayscale",
                                                        textRendering: "optimizeLegibility",
                                                        position: "relative",
                                                        top: "38px",
                                                        right: "30px",
                                                        zIndex: "-1",
                                                    }}
                                                >
                                                    {item.principlenumber?.toUpperCase()}
                                                </div>
                                                <h3
                                                    className="fw-bold stittle text-uppercase"
                                                    style={{ letterSpacing: "1px" }}
                                                >
                                                    {item.principletitle}
                                                </h3>
                                                <p className="pera mb-0">{item.principledescription}</p>
                                            </div>
                                            <div style={{ width: 120, marginLeft: "auto" }}>

                                                <div className="test-shine">
                                                    <img src={item.smallpngimage} alt="" className="img-fluid w-100 h-100" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6 p-lg-5 p-0 principaltext mb-3 mb-md-0 order-md-0 order-1">
                                        <div className="d-flex flex-column justify-content-between h-100">
                                            <div>
                                                <div
                                                    className="h1strike text-warning text-opacity-25 pb-2 display-1 font-normal text-end mb-12 mt-8"
                                                    style={{
                                                        WebkitTextStroke: "1px var(--golden)",
                                                        WebkitFontSmoothing: "antialiased",
                                                        MozOsxFontSmoothing: "grayscale",
                                                        textRendering: "optimizeLegibility",
                                                        position: "relative",
                                                        top: "38px",
                                                        right: "30px",
                                                        zIndex: "-1",
                                                    }}
                                                >
                                                    {item.principlenumber?.toUpperCase()}
                                                </div>
                                                <h3
                                                    className="fw-bold stittle text-uppercase"
                                                    style={{ letterSpacing: "1px" }}
                                                >
                                                    {item.principletitle}
                                                </h3>
                                                <p className="pera mb-0">{item.principledescription}</p>
                                            </div>
                                            <div className="test-shine" style={{ width: 120, marginRight: "auto" }}>

                                                <img src={item.smallpngimage} alt="" className="img-fluid w-100 h-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-lg-5 p-0 principalimg">
                                        <div className="test-shine">
                                            <img
                                                src={item.principleimage}
                                                alt={item.principletitle}
                                                style={{
    width: "100%",
    height: "300px",       // fixed display height for consistency
    objectFit: "cover",    // keeps aspect ratio while covering
    borderRadius: "8px",   // optional: makes it look smoother
  }}
                                                className="img-fluid object-fit-cover shadow"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Principals;
