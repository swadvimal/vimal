// import { BsArrowRight } from 'react-icons/bs';
// import '../../assets/Css/Home.css';
// import products from '../../Product';
// import { useNavigate } from 'react-router-dom';
// function HomeProduct() {
//     let product=products
//     const navigate = useNavigate();

//     return (
//         <>
//             <div className='container mt-3 mb-5'>
//                 <div className='row justify-content-center'>
//                     {products.map((item, i) => {
//                         return (
//                             <div className="col-lg-4 col-md-6 col-sm-6 col-10 ps-sm-2 ps-0 pe-sm-2 pe-3 mt-4" key={i}>
//                                 <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true" className='h-100 m-2'>
//                                     <div className='w-100 p-2 hover-trigger shadow-sm h-100' onClick={() => navigate(`/product/${item.id}`)} style={{ backgroundColor: "rgb(255, 252, 243)", borderRadius: '8px', cursor: "pointer" }}>
//                                         <div className='fw-bold text-dark mt-2 mb-3'>{item.h1}</div>
//                                         <div className='d-flex justify-content-between align-items-end mb-3'>
//                                             <div className="styled-wrapper">
//                                                 <button className="button" >
//                                                     <div className="button-box">
//                                                         <span className="button-elem button-elem1">
//                                                             <BsArrowRight className='fs-6' />
//                                                         </span>
//                                                         <span className="button-elem button-elem2">
//                                                             <BsArrowRight className='fs-6' />
//                                                         </span>
//                                                     </div>
//                                                 </button>
//                                             </div>

//                                         <div className="d-flex flex-wrap gap-2">
//                                             {
//                                                 item.subproducts?.slice(0, 4).map((sub, j) => (
//                                                     <img
//                                                         key={j}
//                                                         src={sub.proimg}
//                                                         alt={sub.ProductName}
//                                                         className='object-fit-contain'
//                                                         height={70}
//                                                         style={{ maxWidth: '70px' }}
//                                                     />
//                                                 ))
//                                             }
//                                             {
//                                                 !item.subproducts && (
//                                                     <img
//                                                         src={item.img}
//                                                         alt={item.h1}
//                                                         className='object-fit-contain'
//                                                         height={70}
//                                                         style={{ maxWidth: '70px' }}
//                                                     />
//                                                 )
//                                             }
//                                         </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default HomeProduct

import React, { useEffect, useState } from 'react';

// import products from '../../Product';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function HomeProduct() {
  // let product=products




  const navigate = useNavigate();
  const [products, setProducts] = useState([])

  const FetchProduct = async () => {
    try {
      const res = await axios.get("https://backendvimalagro.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  }


  useEffect(() => {
    FetchProduct()
  }, [])

  return (
    <>
      <div className='contactinfo_bg pt-0 pt-md-4 mt-4'>
        <div className="container overflow-hidden">
          <div className="row g-3 g-md-4 my-5 mb-4 overflow-hidden">
            {products.map((Item, i) => {
              return (
                <div key={i} className="col-6  col-md-6 col-lg-3 overflow-hidden" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                  <div onClick={() => navigate(`/product/${Item._id}`)} className='text-decoration-none' >
                    <div className="">
                      <div className="p-1 " style={{ position: "relative", overflow: "hidden" }}>
                        <div className="facility_image">
                          <img
                            src={Item.productImages[0]}
                            alt=""
                            className="mainproduct-home img-fluid w-100 object-fit-contain py-4 py-lg-5 pb-5 pt-0 pt-lg-0"
                            style={{ transition: "transform 0.5s", width: "100%", height: "220px", backgroundColor: "#fffcf3" }}
                          />
                          <div className="image-title fw-bold jr_tittle">
                            {Item.productName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProduct;
