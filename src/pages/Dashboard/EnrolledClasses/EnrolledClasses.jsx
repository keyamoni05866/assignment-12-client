import { useQuery } from '@tanstack/react-query';
import React from 'react';

const EnrolledClasses = () => {
    const { data: enrollClass = [] } = useQuery(
        ["enrollClass"],
        async () => {
          const res = await fetch("http://localhost:5000/payments");
          return res.json();
        }
      );

    return (
        <div>
      <h2 className="text-5xl text-center font-semibold pt-10 uppercase underline text-[#168aad] italic">
       Enrolled Class
      </h2>
      <div className="   px-36 py-20 ">
        <div className="overflow-x-auto shadow-xl bg-base-100">
          <table className="table ">
            {/* head */}
            <thead className=" bg-[#168aad]  text-white text-lg">
              <tr>
        
                <th>Serial</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Email</th>
                <th>Instructor Name</th>
                <th>Price</th>
             
               
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {enrollClass.map((enroll, index) => (
                <tr className="text-lg">
                 <td>{index + 1}</td>
                 <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={enroll.classImage} alt="user photo" />
                  </div>
              
                </td>

                  <td>
                   {enroll.className}
                  </td>

                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{enroll.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{enroll.name}</td>
                  <td>{enroll.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default EnrolledClasses;