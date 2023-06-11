import React from "react";

const SingleClass = ({ singleClass }) => {
  const { className, classImage, seats, price, name } = singleClass;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={classImage} alt="Shoes" className="h-[300px] w-full" />
        </figure>
        <div className="card-body my-3">
          <h2 className="text-xl font-semibold">Class Name: {className}</h2>

          <h2 className="text-xl font-semibold">Instructor Name: {name}</h2>
          <div className="flex text-xl mb-3">
            <p>Available Seats: {seats}</p>
            <p>Class Price: {price}</p>
          </div>

          <div className="card-actions">
            <button className="btn hover:bg-[#0f4b5e] bg-[#168aad] text-white text-xl w-full">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
