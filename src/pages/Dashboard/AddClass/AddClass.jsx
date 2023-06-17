import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)
   

    const  handleAddClass = (event)=>{
         event.preventDefault();

         const form = event.target
         const className=form.className.value;
         const classImage = form.classImage.value;
         const seats = form.seats.value;
         const price = parseInt(form.price.value)
         const name = user?.displayName;
         const email = user?.email

         const classes ={
            className,
            classImage,
            seats,
            price,
            name,
            email,
            status: 'pending',
            
         }
        //  console.log(classes)
         axios.post('https://assignment-12-server-eight-brown.vercel.app/addClasses', classes)
         .then(res =>{
            // console.log(res)
            if(res.data.insertedId){
                Swal.fire({
                  title: 'Successfully Added Classes',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
              }
              form.reset();
         })
        
    }
  return (
    <div>
      <h2 className="text-5xl text-center font-semibold mt-10 uppercase underline text-[#168aad] italic">
        Add A Class{" "}
      </h2>

      <div className="max-w-7xl  mx-20 mb-8 mt-16 shadow-lg bg-slate-200 h-[500px] rounded px-12 py-8 ">
        <form onSubmit={handleAddClass}>
          
          <div className="grid grid-cols-2 gap-3 ">
            <div class="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Class Name</span>
              </label>
              <input
                name="className"
                type="text"
                placeholder="Class Name"
                className="input input-bordered w-full "
              />
            </div>
          
          <div>
            <div class="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Class Image</span>
              </label>
              <input
              name="classImage"
                type="text"
                placeholder="Class Image"
                className="input input-bordered full "
              />
            </div>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 ">
            <div class="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-lg">Instructor Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
               
                className="input input-bordered w-full "
              />
            </div>
          
          <div>
            <div class="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Instructor Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="text"
                placeholder="Instructor Email"
                className="input input-bordered full "
              />
            </div>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5 ">
            <div class="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-lg">Available Seats</span>
              </label>
              <input
                 name="seats"
                type="text"
                placeholder="Available Seats"
                className="input input-bordered w-full "
              />
            </div>
          
          <div>
            <div class="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Price</span>
              </label>
              <input
              
               name="price"
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          </div>
        <input type="submit" value="Add Class" className="py-3 w-full  rounded-lg px-10 mt-10 text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
