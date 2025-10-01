import Certificates from '../Certificates'
import HOC from '../HOC'
import Counter from './Counter'
import HomeAbout from './HomeAbout'
import HomeCarousel from './HomeCarousel'
import HomeCategory from './HomeCategory'
import HomeContact from './HomeContact'
import HomeRecipe from './HomeRecipe'
import Testimonial from './Testimonial'
import '../../assets/Css/Home.css';
import ProductBrand from './ProductBrand'


function HomePage() {
    return (
        <div>
            <HomeCarousel />
            <ProductBrand />
            <HomeAbout />
            <HomeCategory />
            <Counter />
            {/* <HomeContact /> */}

            {/* <HomeProduct /> */}
            <HomeRecipe />
            <Testimonial />
            <Certificates />
        </div>
    )
}

export default HOC(HomePage)