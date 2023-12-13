import React from "react";
import { Link } from "react-router-dom";

const SinglePopular = ({ popular }) => {
  const { classImage, className, instructorName, price } = popular;


  return (
    <div  data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="2000">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={classImage} alt="Shoes" className="h-[300px] w-full" />
        </figure>
        <div className="card-body my-3">
          <h2 className="text-xl font-semibold">Class Name:{className} </h2>

          <h2 className="text-xl font-semibold">Price: {price}</h2>

          <p className="text-xl font-semibold"> Instructor Name: {instructorName}</p>
          <div className="card-actions mt-2">
           <Link to="classes" className="py-2 rounded-lg text-center hover:bg-[#0f4b5e] bg-[#168aad] text-white text-xl w-full">
              Select
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopular;
