import React from 'react';

const SingleInstructor = ({instructor}) => {
    console.log(instructor)
    return (
        <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
        <figure>
          <img src={instructor.photo} alt="Shoes" className="h-[300px] w-full" />
        </figure>
        <div className="card-body my-3">
          <h2 className="text-xl font-semibold">Instructor Name: {instructor.name}</h2>

          <h2 className="text-xl font-semibold">Instructor Email: {instructor.email}</h2>
    

      
        </div>
      </div>
        </div>
    );
};

export default SingleInstructor;