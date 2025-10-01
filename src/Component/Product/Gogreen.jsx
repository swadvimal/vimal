
const images = [
    require('../../assets/Images/green1.webp'),
    require('../../assets/Images/green2.webp'),
    require('../../assets/Images/green3.webp'),
    require('../../assets/Images/green4.webp'),
]

function Gogreen() {
    return (
        <div className='container'>
            <div className="col-10 mx-auto">
                <div className='row justify-content-center'>
                    {images.map((item) => {
                        return (
                            <div className='col-lg-3 col-sm-6 col-6 text-center'>
                                <img src={item} alt="" className='img-fluid' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gogreen