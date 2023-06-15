import React from "react";

const SinglePopular = ({ popular }) => {
  const { classImage, className, instructorName, price } = popular;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={classImage} alt="Shoes" className="h-[300px] w-full" />
        </figure>
        <div className="card-body my-3">
          <h2 className="text-xl font-semibold">Class Name:{className} </h2>

          <h2 className="text-xl font-semibold">Price: {price}</h2>

          <p className="text-xl font-semibold"> Instructor Name: {instructorName}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePopular;
