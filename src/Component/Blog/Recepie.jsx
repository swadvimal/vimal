// import { FaRegClock } from 'react-icons/fa'
// import HOC from '../HOC'
// import { GoPerson } from 'react-icons/go'
// import { PiChefHat } from 'react-icons/pi'
// import { MdKeyboardDoubleArrowRight, MdStarBorder } from 'react-icons/md'
// import Tittles from '../Tittles'
// import { TbArrowBadgeRightFilled } from 'react-icons/tb'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// function Recepie() {
//     const [recipeSections, setRecipeSections] = useState([])
//     const { id } = useParams()

//     const FetchProduct = async () => {
//         try {
//             const res = await axios.get("https://backendvimalagro.onrender.com/api/blogs");
//             setRecipeSections(res.data);
//         } catch (err) {
//             console.error("Error fetching products:", err);
//         }
//     }


//     useEffect(() => {
//         FetchProduct()
//     }, [])

//     const data = recipeSections.find((item) => item._id === id)
//     console.log(data);

//     return (
//         <>
//             {/* <div className='mt-5'>
//                 {data && data.blogBanner && (
//                     <img src={data.blogBanner} alt="Recipe Banner" className='img-fluid w-100' />
//                 )}
//             </div> */}
//             <div
//                 style={{ position: "relative", width: "100%", overflow: "hidden" }}
//                 className="landingimg mt-5 pt-md-4 pt-0"
//             >
//                 {data && data.blogBanner && (
//                     <>
//                         {/* <img
//                             src={data.blogBanner}
//                             alt="desktop-banner"
//                             className="img-fluid w-100 d-lg-block d-none object-fit-cover"
//                         />
//                         <img
//                             src={data.blogBannerMobile}
//                             alt="mobile-banner"
//                             className="img-fluid w-100 d-lg-none d-block object-fit-cover"
//                         /> */}
//                         <div>
//   <div className="d-none d-lg-block bannervimaldesktop " style={{boxShadow:"inset 0 0 100px 20px #000"}}>
//     <img src={data.blogBanner} alt="" className="img-fluid w-100 h-100 "/>
//   </div>
//   <div className="d-block d-lg-none bannervimalmobile">
//     <img src={data.blogBanner} alt="" className="img-fluid w-100 h-100 object-fit-cover"/>
//   </div>
// </div>
//                     </>
//                 )}
//             </div>
//             <div className='container'>
//                 {data && data.recipes && data.recipes.map((item, i) => {
//                     return (
//                         <div className='pt-3 pt-md-5'>
//                             <div>
//                                 <div className='text-center py-3'> <Tittles stitle={item.recipeName} /></div>
//                                 <div className='row mx-auto'>
//                                     <div className="col-lg-3 col-6">
//                                         <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
//                                             <GoPerson className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
//                                             <div className='ms-0 ms-md-3'>
//                                                 <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Servings</div>
//                                                 <div className="text-center text-md-start mt-1 mt-md-0">{item.serving} Persons</div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className="col-lg-3 col-6">
//                                         <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
//                                             <FaRegClock className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
//                                             <div className='ms-0 ms-md-3'>
//                                                 <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Prep Time</div>
//                                                 <div className="text-center text-md-start mt-1 mt-md-0">{item.prep_time} Minutes</div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className="col-lg-3 col-6">
//                                         <div className="h-100 mt-3 mt-md-0 d-block d-md-flex align-items-center mt-2 mt-md-2 mt-lg-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
//                                             <PiChefHat className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
//                                             <div className='ms-0 ms-md-3'>
//                                                 <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Cook Time</div>
//                                                 <div className="text-center text-md-start mt-1 mt-md-0">{item.cook_time} Minutes</div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className="col-lg-3 col-6">
//                                         <div className="h-100 mt-3 mt-md-0 d-block d-md-flex align-items-center mt-2 mt-md-2 mt-lg-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
//                                             <MdStarBorder className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
//                                             <div className='ms-0 ms-md-3'>
//                                                 <div className='fs-5 fw-semibold text-center text-md-start mt-2 mt-md-0' style={{ letterSpacing: "1.2px" }}>Difficulty</div>
//                                                 <div className="text-center text-md-start mt-1 mt-md-0">{item.difficulty}</div>
//                                             </div>

//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className='p-1 mx-auto mt-4'>
//                                 <p className='p-2' style={{ textAlign: "justify" }}>
//                                     {item.description}
//                                 </p>
//                             </div>
//                             {/* <div className='row mt-0 mt-md-3'>
//                                 <div className='col-12 col-lg-7 mb-4'>
//                                     <div className='h-100'>
//                                         <div className='shadow-lg p-4 rounded-3'>
//                                             <Tittles stitle='ingredients' />
//                                             <ul className="ingredients-list mt-4 ps-2">
//                                                 {item.ingredients.map((ing, idx) => (
//                                                     <li key={idx}><MdKeyboardDoubleArrowRight /> {ing}</li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='col-12 col-lg-5 mb-4'>
//                                     <div className='h-100'>
//                                         <img src={item.image} className='img-fluid rounded-3 w-100 h-100 object-fit-cover' alt="" />
//                                     </div>
//                                 </div>
//                             </div> */}
//                              <div className='row mt-0 mt-md-3 align-items-stretch'>
//                                 <div className='col-12 col-lg-7 mb-4'>
//                                     <div className='h-100'>
//                                         <div className='shadow-lg p-4 rounded-3 h-100'>
//                                             <Tittles stitle='ingredients' />
//                                             <ul className="ingredients-list mt-4 ps-2">
//                                                 {item.ingredients.map((ing, idx) => (
//                                                     <li key={idx}><MdKeyboardDoubleArrowRight /> {ing}</li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='col-12 col-lg-5 mb-4'>
//                                     <div className='h-100'>
//                                         <div style={{ height: "300px" }}>
//                                             <img src={item.image} className='img-fluid rounded-3 w-100 object-fit-cover h-100' alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="p-1 mx-auto mb-3 mb-md-5 mt-2 mt-md-4">
//                                 <Tittles stitle='Coockig Intructions' />
//                                 <div className='mt-4'>
//                                     {item.cooking_instructions.map((step, idx) => (
//                                         <div key={idx} className="d-flex align-items-center my-3 p-3 rounded-4 shadow" style={{ backgroundColor: "var(--ofwhite)" }}>
//                                             <h1 className="me-3 text-warning fw-bold">{String(idx + 1).padStart(2, "0")}</h1>
//                                             <p className="mb-0 pera">{step}</p>
//                                         </div>
//                                     ))}

//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default HOC(Recepie)

import { FaRegClock } from 'react-icons/fa'
import HOC from '../HOC'
import { GoPerson } from 'react-icons/go'
import { PiChefHat } from 'react-icons/pi'
import { MdKeyboardDoubleArrowRight, MdStarBorder } from 'react-icons/md'
import Tittles from '../Tittles'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Recepie() {
    const [recipeSections, setRecipeSections] = useState([])
    const [activeRecipeIndex, setActiveRecipeIndex] = useState(0)
    const { id } = useParams()

    const FetchProduct = async () => {
        try {
            const res = await axios.get("https://backendvimalagro.onrender.com/api/blogs");
            setRecipeSections(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }

    useEffect(() => {
        FetchProduct()
    }, [])

    const data = recipeSections.find((item) => item._id === id)
    const recipes = data?.recipes || []
    const activeRecipe = recipes[activeRecipeIndex]

    return (
        <>
            <div
                style={{ position: "relative", width: "100%", overflow: "hidden" }}
                className="landingimg mt-5 pt-md-4 pt-0"
            >
                {data && data.blogBanner && (
                    <div>
                        <div className="d-none d-lg-block  " >
                            <img src={data.blogBanner} alt="" className="img-fluid w-100 h-100 " />
                        </div>
                        <div className="d-block d-lg-none ">
                            <img src={data.blogBannerMobile || data.blogBanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                )}
            </div>

            <div className='container'>
                {/* Tabs for recipe names */}
                {recipes.length > 0 && (
                    <>
                        <div className="text-center mt-4">
                            <h4 className="fw-bold text-uppercase">{data?.category}</h4>
                        </div>
                        <div className="row d-flex gy-2 justify-content-center mt-2">
                            {recipes.map((r, idx) => (
                                <button
                                    key={idx}
                                    className={`col-5 col-md-3 col-lg-2 rounded-pill mx-1 mx-md-2 p-1 shadow-sm btn_active bg-transparent text-capitalize ${activeRecipeIndex === idx ? "active-btn" : ""}`}
                                    onClick={() => setActiveRecipeIndex(idx)}
                                >
                                    {r.recipeName}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {activeRecipe && (
                    <div className='pt-2 pt-md-3'>
                        <div className='text-center py-3'>
                            <Tittles stitle={activeRecipe.recipeName} />
                        </div>
                        <div className='row mx-auto g-3'>
                            <div className="col-lg-3 col-6">
                                <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <GoPerson className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3 mt-2 mt-md-0'>
                                        <div className='fs-5 fw-semibold'>Servings</div>
                                        <div>{activeRecipe.serving}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="h-100 d-block d-md-flex align-items-center mt-2 mt-md-0 justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <FaRegClock className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3 mt-2 mt-md-0'>
                                        <div className='fs-5 fw-semibold'>Prep Time</div>
                                        <div>{activeRecipe.prep_time}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="h-100 mt-2 mt-md-0 d-block d-md-flex align-items-center justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <PiChefHat className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3 mt-2 mt-md-0'>
                                        <div className='fs-5 fw-semibold'>Cook Time</div>
                                        <div>{activeRecipe.cook_time}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="h-100 mt-2 mt-md-0 d-block d-md-flex align-items-center justify-content-center text-white rounded-4 p-3 p-md-2 text-center text-md-start" style={{ backgroundColor: "var(--red)" }}>
                                    <MdStarBorder className='text-warning me-1 fs-1 p-1 rounded-5 fw-bold' style={{ backgroundColor: 'var(--ofwhite)', boxShadow: " 0 0 2px 5px #ffc400a1", }} />
                                    <div className='ms-0 ms-md-3 mt-2 mt-md-0'>
                                        <div className='fs-5 fw-semibold'>Difficulty</div>
                                        <div className='text-capitalize'>{activeRecipe.difficulty}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='p-1 mx-auto mt-4'>
                            <p className='p-2 pera' style={{ textAlign: "justify" }}>
                                {activeRecipe.description}
                            </p>
                        </div>

                        <div className='row mt-0 mt-md-3 align-items-stretch'>
                            <div className='col-12 col-lg-7 mb-4'>
                                <div className='h-100'>
                                    <div className='shadow-lg p-4 rounded-3 h-100'>
                                        <Tittles stitle='Ingredients' />
                                        <ul className="ingredients-list mt-4 ps-2 pera">
                                            {activeRecipe.ingredients.map((ing, idx) => (
                                                <li key={idx}><MdKeyboardDoubleArrowRight /> {ing}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-5 mb-4'>
                                <div className='h-100'>
                                    <div style={{ height: "300px" }}>
                                        <img src={activeRecipe.image} className='img-fluid rounded-3 w-100 object-fit-cover h-100' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-1 mx-auto mb-3 mb-md-5 mt-2 mt-md-4">
                            <Tittles stitle='Cooking Instructions' />
                            <div className='mt-4'>
                                {activeRecipe.cooking_instructions.map((step, idx) => (
                                    <div key={idx} className="d-flex align-items-center my-3 p-3 rounded-4 shadow" style={{ backgroundColor: "var(--ofwhite)" }}>
                                        <h1 className="me-3 text-warning fw-bold">{String(idx + 1).padStart(2, "0")}</h1>
                                        <p className="mb-0 pera">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default HOC(Recepie)