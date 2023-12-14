import React from "react";
import { Link } from "react-router-dom";

const SinglePopular = ({ popular }) => {
  const { classImage, className, instructorName, price } = popular;


  return (
    <div  data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="2000">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={classImage} alt="Shoes" className="h-[300px] w-full" />
        </figure>
        <div className="card-body my-3">
          <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-xl text-xl font-black italic">Class Name:{className} </h2>

          <h2 className="text-[22px] text-teal-700  font-semibold">Price: {price}$</h2>

          <p className="text-xl font-semibold"> Instructor Name: {instructorName}</p>
          <div className="card-actions mt-3">
           <Link to="classes" className="py-2 mx-auto rounded-lg text-center hover:bg-[#0f4b5e] bg-[#327c92] text-white text-xl w-[100%]">
              Select
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopular;
