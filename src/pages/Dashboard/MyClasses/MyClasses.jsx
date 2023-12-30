import React from "react";
import useMyClass from "../../../Hooks/useMyClasses";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const [myClasses] = useMyClass();
//   console.log(myClasses);



  return (
    <div className="max-w-7xl ms-7 mr-6 mx-auto">
      <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10">
         My Classes
      </h2>
      <div className="   shadow-xl mt-8">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className=" bg-[#168aad]  text-white text-lg">
            <tr>
              <th>serial</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Enrolled Student</th>
              <th>Status</th>
            

              <th>Update</th>
            
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myClasses.map((singleClass, index) => (
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
                <td>0</td>
                <td>
                {singleClass.status}
                </td>
             
                <td>
                  <button
                    
                    className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm "
                  >
                    Update
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

export default MyClasses;
