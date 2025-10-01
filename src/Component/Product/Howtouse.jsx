import React from 'react'

function Howtouse(howToMakeBanner) {
    console.log(howToMakeBanner);

    return (
        <>
           
            <div style={{ backgroundColor: "#fffcf3" }}>
             <div className="container-xxl">
                   <div className="d-none d-lg-block mt-5" style={{ backgroundColor: "#fffcf3" }}>
                    <img src={howToMakeBanner.banner} alt="" className="img-fluid w-100 h-100 " />
                </div>
                <div className="d-block d-lg-none mt-5">
                    <img src={howToMakeBanner.bannerMobile} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
             </div>
            </div>

        </>
    )
}

export default Howtouse