import React from "react";
import useClass from "../../../Hooks/useClass";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";

const SelectedClass = () => {
  const [selectedClasses, refetch] = useClass();

  const handleDelete = singleClass => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete This Class",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {

       
                  
                
              fetch(`https://assignment-12-server-eight-brown.vercel.app/selectClasses/${singleClass._id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }

                
              })
      }
    });
  };

  return (
    <div>
    <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10">
    Selected Classes
    </h2>

    <div className=" mx-10 shadow-xl mt-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#168aad]  text-white text-lg">
            <tr>
              <th>serial</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th> Email</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>pay</th>
              <th>delete</th>
            
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {selectedClasses.map((singleClass, index) => (
              <tr key={singleClass._id} className="text-lg">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={singleClass.classImage} alt="user photo" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{singleClass.className}</div>
                    </div>
                  </div>
                </td>
                <td>{singleClass.email}</td>
                <td>{singleClass.name}</td>
              
                
                <td>{singleClass.price}</td>
                <td>
                  <Link   to={`/dashboard/payment/${singleClass._id}`}  className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm">
                    Pay
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(singleClass)}
                    className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm "
                  >
                    Delete
                  </button>
                </td>
              
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>





   
  );
};

export default SelectedClass;
