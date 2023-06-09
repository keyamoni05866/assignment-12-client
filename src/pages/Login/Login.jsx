import React, { useContext } from 'react';
import './Login.css'
import img from '../../assets/loginbg.avif'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from  = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();

      const onSubmit = data => {
        
        console.log(data)

        signIn(data.email, data.password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser)
            Swal.fire({
                title: 'Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    
    };

  
    return (
     <div className='bg-base-200 py-16 ps-20'>
           <div className='backgroundImg max-w-7xl mx-auto    '>
       
       <div className="hero min-h-full py-12 rounded-none ">
         
         <div className="  ">
         <h1 className="text-center text-4xl font-semibold mt-2 italic text-[#168aad] uppercase underline
         ">Login Now</h1>
           <div className="flex h-full py-16">
          
             <div className=" w-1/2   shadow-2xl">
               <img src={img} alt="" className="h-96 " />
             </div>
             <div className="card rounded-none w-full mr-40   max-w-sm shadow-2xl bg-base-100">
               <div className="card-body ">
              <form  onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     type="text"
                     placeholder="email"
                     {...register("email", { required: true })}
                     
                     className="input input-bordered"
                   />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
         
                   <input
                     type="password"
                     placeholder="password"
                     {...register("password", { required: true })}
                     className="input input-bordered"
                   />
                   {errors.password && <span className="text-red-500">This field is required</span>}
                   <label className="label">
                  <p className="text-sm">Don't have an account <Link to="/register" className=" text-[#168aad] font-semibold ps-1">Sign Up</Link></p>
                   </label>
                 </div>
                 
                 
                   <input type="submit" value="Login" className="py-3 w-full rounded-lg px-10 mt-2  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad] "/>
            
              </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
    );
};

export default Login;