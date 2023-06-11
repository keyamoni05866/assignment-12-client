import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    const {data: classes=[], refetch} = useQuery(['classes'], async() =>{
        const res = await fetch('http://localhost:5000/addClasses')
        return res.json();
    })
      
const handleApproved = singleClass=>{
    fetch(`http://localhost:5000/addClasses/${singleClass._id}`, {
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        if(data.modifiedCount){
         refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "You Approved this class",
                showConfirmButton: false,
                timer: 1500
              })
        }
      
      })
}


    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-10 uppercase underline text-[#168aad] italic">
       Manage Classes
      </h2>

      <div className='max-w-7xl mx-auto mt-8'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=' bg-[#168aad]  text-white text-lg'>
      <tr>
        <th>
        serial
        </th>
        <th>Class Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        classes.map((singleClass, index) =>  <tr className='text-lg'>
            <td>
              {index  + 1}
            </td>
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
            <td>
              {singleClass.name}
           
             
            </td>
            <td>
              {singleClass.email}
           
             
            </td>
            <td>
              {singleClass.seats}
           
             
            </td>
            <td>
              {singleClass.price}
           
             
            </td>
           
            <td>
            <button  onClick={()=>handleApproved(singleClass)}  className="btn btn-sm mr-2 bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm">{singleClass.status}</button>
              <button  className="btn btn-sm mr-2 bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm ">Deny</button>
              <button  className="btn btn-sm bg-[#168aad] hover:bg-[#0f4b5e] text-white text-sm ">FeedBack</button>
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

export default ManageClasses;