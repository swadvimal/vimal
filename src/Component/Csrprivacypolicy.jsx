import React from 'react';
import HOC from './HOC';
import Tittles from './Tittles';
import ButtonCom from './ButtonCom';
import { Link } from 'react-router-dom';

function Csrprivacypolicy() {
  return (
    <>
<div className="contactinfo_bg">
    <div className="container text-center mediamargin">
     <div className="mt-5">
        <h6
                className="text-uppercase mb-0 mb-md-2 stittle"
                data-aos="fade-up "
                data-aos-duration="1500"
                data-aos-delay="50"
                data-aos-once="true"
              >
                <Tittles stitle="CSR policy & projects" />
              </h6>
 </div>
    <div className="pera py-3">
        The "CSR mission" of Vimal Agro Products Private Limited ("Vimal Agro") is to contribute to the economic and social development of the community at large. Vimal Agro seeks to mainstream economically, physically and socially challenged groups and to draw them into the cycle of growth, development and empowerment. Its strategy is to integrate its activities in community development, social responsibility and environmental responsibility and encourage business unit to include these considerations into its operations. The tag line of this policy is "Time to Return to Society".
    </div>
     <div className="mt-2">
        <h6
                className="text-uppercase mb-0 mb-md-2 ltittle"
                data-aos="fade-up "
                data-aos-duration="1500"
                data-aos-delay="50"
                data-aos-once="true"
              >
                <Tittles ltitle="Composition of CSR Committee :" />
              </h6>
 </div>
 <div className='shadow-lg bg-white my-2 p-2 p-md-0'>
    <img src={require("../assets/Images/csr_policy.jpg")} alt="" className='img-fluid '/>
 </div>
 <div className='d-block d-md-flex justify-content-center align-items-center my-3'>
    <div className='mx-2'>
        <Link   to={require("../assets/Images/CSR-POLICY-AND-PROJECTS.pdf")}
                target="_blank">
        
        <ButtonCom btn="CSR 2022"/>
        </Link>
    </div>
    <div className='mx-2'>
      <Link  to={require("../assets/Images/csr_policy_projects_certificate.pdf")}
                target="_blank">
        <ButtonCom btn="Download Certificate"/>
      </Link>
    </div>
    <div className='mx-2' >
        <Link   to={require("../assets/Images/FormMGT-7-2022.pdf")}
                target="_blank">
        <ButtonCom btn="Form MGT-7 2022"/>
        </Link>
    </div>
         
                   
               
 </div>
</div>
</div>
    </>
  );
}

export default HOC(Csrprivacypolicy);
