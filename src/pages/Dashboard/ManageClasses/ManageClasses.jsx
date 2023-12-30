import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("https://assignment-12-server-eight-brown.vercel.app/addClasses");
    return res.json();
  });

  const handleApproved = (singleClass) => {
    fetch(`https://assignment-12-server-eight-brown.vercel.app/addClasses/approved/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Approved this class",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDenied = (id) => {
    fetch(`https://assignment-12-server-eight-brown.vercel.app/addClasses/denied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Denied this class",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-7xl  ">
      <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10">
        Manage Classes
      </h2>

      <div className=" ms-2 mr-1  mt-8">
        <div className="overflow-x-auto ">
          <table className="table ">
            {/* head */}
            <thead className=" bg-[#168aad]  text-white  text-base">
              <tr>
                <th>serial</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Status</th>
             
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {classes.map((singleClass, index) => (
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
                  <td>{singleClass.name}</td>
                  <td>{singleClass.email}</td>
                  <td>{singleClass.seats}</td>
                  <td>{singleClass.price}$</td>

                  <td>
                    <button
                      onClick={() => handleApproved(singleClass)}
                      disabled={singleClass.status == "approved"}
                      className="btn btn-sm  bg-[#168aad] hover:bg-[#0f4b5e]  text-white "
                    >
                  approved
                    </button>
                    </td>
                <td>
                <button
                      onClick={() => handleDenied(singleClass._id)}
                      disabled={singleClass.status == "denied"}
                      className="btn btn-sm  bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm "
                    >
                      denied
                    </button>
                    <Link to={`/dashboard/feedback/${singleClass._id}`}>   <button className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm mt-3">
                      FeedBack
                    </button></Link>
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

export default ManageClasses;
