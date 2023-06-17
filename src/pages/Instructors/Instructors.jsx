import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructors = () => {

   const {data: instructors=[], refetch} = useQuery(['instructors'], async () =>{
    const res = await fetch('https://assignment-12-server-eight-brown.vercel.app/users/instructor')
    return res.json()
   })






    return (
        <div className=' bg-[#f0f5f7]  pb-16'>
            <h2 className='text-4xl  pt-8 underline text-center text-[#168aad] font-semibold uppercase italic '>Here is Our Instructors</h2>
             

            <div className='  px-72 pt-5'>

            <div className="overflow-x-auto shadow-xl bg-base-100">
  <table className="table ">
    {/* head */}
    <thead className=' bg-[#168aad]  text-white text-lg'>
      <tr>
        <th>
          Serial
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        instructors.map((instructor, index) =>  <tr className='text-lg'>
            <td>
              {index  + 1}
            </td>
            <td>
            <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={instructor.photo} alt="user photo" />
                  </div>
                </div>
            </td>
            <td>
              <div className="flex items-center space-x-3">
              
                <div>
                  <div className="font-bold">{instructor.name}</div>
                
                </div>
              </div>
            </td>
            <td>
              {instructor.email}
              
             
            </td>
            <td>
              {instructor.role}
              
             
            </td>
          </tr>)
      }
     
 
   
    
    </tbody>
  
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Instructors;