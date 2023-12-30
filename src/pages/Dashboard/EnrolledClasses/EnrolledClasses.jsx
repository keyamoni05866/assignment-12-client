import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const EnrolledClasses = () => {
  const {user} = useContext(AuthContext);
    const { data: enrollClass = [] } = useQuery(
        ["enrollClass",  user?.email],
        async () => {
          const res = await fetch(`https://assignment-12-server-eight-brown.vercel.app/payments?email=${user?.email}`);
          return res.json();
        }
      );

    return (
        <div>
        <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10">
        Enrolled Classes
        </h2>
  
        <div className=" mx-36 shadow-xl mt-8">
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
                
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
  
                {enrollClass.map((enroll, index) => (
                  <tr key={enroll._id} className="text-lg">
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={enroll.classImage} alt="user photo" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{enroll.className}</div>
                        </div>
                      </div>
                    </td>
                    <td>{enroll.email}</td>
                    <td>{enroll.instructorName}</td>
                  
                    
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