import React from 'react';

function Tittles(props) {
  return (

    <div className='ps-0 ps-md-2'>
      <h4
        className=" fw-bold stittle p-0 m-0 text-uppercase"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {props.stitle}
      </h4>
      <h2
        className="ftittle fw-bold m-0 p-0 text-capitalize"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {props.ltitle}
      </h2>
    </div>
  );
}

export default Tittles