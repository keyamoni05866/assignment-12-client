import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
         const {data: users =[], refetch} = useQuery(['users'], async () =>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
         })

const handleAdmin = user =>{
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Admin!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          
          })
}
const handleInstructor = user =>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      
      if(data.modifiedCount){
          refetch();
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is Instructor!`,
              showConfirmButton: false,
              timer: 1500
            })
      }
    
    })
}
    return (
        <div className='max-w-7xl mx-auto '>
        <h2  className='text-5xl text-center font-semibold mt-14 uppercase underline text-[#168aad] italic'>Manage User </h2>
        <h3 className='text-4xl font-semibold  mt-3 uppercase mb-8'>Total Users: {users.length}</h3>
           

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=' bg-[#168aad]  text-white text-lg'>
      <tr>
        <th>
     
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        users.map((user, index) =>  <tr key={user._id} className='text-lg'>
            <td>
              {index  + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photo} alt="user photo" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.name}</div>
                
                </div>
              </div>
            </td>
            <td>
              {user.email}
              <br/>
             
            </td>
            
            <td>
              <button  onClick={() => handleAdmin(user)}  className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm">Make Admin</button>
            </td>
            <td>
              <button onClick={() => handleInstructor(user)}  className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm ">Make Instructor</button>
            </td>
          </tr>)
      }
     
 
   
    
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default ManageUser;