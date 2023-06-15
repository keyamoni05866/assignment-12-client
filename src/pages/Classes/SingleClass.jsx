import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SingleClass = ({ singleClass }) => {
  const { className, classImage, seats, price, name,_id } = singleClass;
  const {user} = useContext(AuthContext);
  const navigate =useNavigate();
  const location = useLocation();

  const handleSelectClass = singleClass =>{
                                        
                        if(user && user?.email){
                          const selectClass = {classId: _id, name, classImage, className, seats, price, email:user?.email }
                          fetch('http://localhost:5000/selectClasses',{
                            method: 'POST',
                            headers:{
                              'content-type': 'application/json'
                            },
                            body: JSON.stringify(selectClass)
                          })
                          .then(res => res.json())
                          .then(data => {
                           if(data.insertedId){
                            Swal.fire({
                              position: 'top-center',
                              icon: 'success',
                              title: "You Select This Class",
                              showConfirmButton: false,
                              timer: 1500
                            })
                           }
                          })
                        } 
                        
                        else{
                          Swal.fire({
                            title: 'Please login first for selecting class',
                           
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login Now!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                             navigate('/login', {state:{from: location}})
                            }
                          })
                        }
  }
 
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
            <button onClick={() => handleSelectClass(singleClass)} className="btn hover:bg-[#0f4b5e] bg-[#168aad] text-white text-xl w-full">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
