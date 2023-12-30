import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';


const ManageUser = () => {
 
         const {data: users =[], refetch} = useQuery(['users'], async () =>{
            const res = await fetch('https://assignment-12-server-eight-brown.vercel.app/users')
            return res.json();
         })
     

const handleAdmin = user =>{
          fetch(`https://assignment-12-server-eight-brown.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            
            if(data.modifiedCount){
                refetch();
                // setDisable(data)
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
    fetch(`https://assignment-12-server-eight-brown.vercel.app/users/instructor/${user._id}`, {
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
        <div className='max-w-7xl ms-8 mr-8 '>
        <h2  className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10">Manage User </h2>
       
           

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=' bg-[#168aad]  text-white text-base'>
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
         
            <button  onClick={() => handleAdmin(user)} disabled={user?.role === 'admin'}  className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm">Make Admin</button>
          
              
            </td>
            <td>
              <button onClick={() => handleInstructor(user)} disabled={user?.role === 'instructor'}   className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm ">Make Instructor</button>
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