import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './Component/Home/HomePage';
import ContactPage from './Component/ContactUs/ContactPage';
import AboutusSec from './Component/Aboutus/AboutusSec';
import Product from './Component/Product/Product';
import SubProducts from './Component/Product/SubProductPage';
import SpecificSubPro from './Component/Product/SpecificSubPro';
import Blog from './Component/Blog/Blog';
import ScrollToTop from './ScrollToTop';
import Recepie from './Component/Blog/Recepie';
import Page404 from './Component/Page404';
import Csrprivacypolicy from './Component/Csrprivacypolicy';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutusSec />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<SubProducts />} />
          <Route path='/product/:id/:proid' element={<SpecificSubPro />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/Recepie' element={<Recepie />} />
          <Route path='/Recepie/:id' element={<Recepie />} />
          <Route path='/contact' element={<ContactPage />} />
    <Route path='/csrpolicy' element={<Csrprivacypolicy/>} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;