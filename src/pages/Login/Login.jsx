import React, { useContext } from 'react';
import './Login.css'
import img from '../../assets/loginbg.avif'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
const Login = () => {

    const {signIn, googleSign} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
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

    // google sign
    const handleGoogle = () =>{
      googleSign()
      .then(result => {
       const loggedInUser =result.user;
       console.log(loggedInUser);
       const savedUser = {
         name: loggedInUser.displayName,
         email: loggedInUser.email,
         photo: loggedInUser.photoURL,
       };
       fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(savedUser),
       })
         .then((res) => res.json())
         .then(() => {
          navigate('/')
         });

      })
    
      .catch(error =>console.error(error))
}
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
                     required
                     placeholder="email"
                     {...register("email")}
                     
                     className="input input-bordered"
                   />
                  
                 </div>
              
               <div className="form-control relative">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
         
                   <input
                     type={showPassword ? "text" : "password"}
                     required
                     placeholder="password"
                     {...register("password")}
                     className="input input-bordered "
                   />
                   <button className='absolute right-6 text-xl top-10 bottom-0 flex items-center '>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                   </button>
                 
                
                 </div>
           
                 <label className="label">
                  <p className="text-sm">Don't have an account <Link to="/register" className=" text-[#168aad] font-semibold ps-1">Sign Up</Link></p>
                   </label>
                 
                 
                
                <input type="submit" value="Login" className="py-3 w-full  rounded-lg px-10 mt-2  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad] "/>
              
                    
          
                <button onClick={handleGoogle} className="flex items-center gap-2  shadow-sm justify-center text-xl  w-full py-3 rounded-lg px-10  mt-2  text-black  border ">
                        <FaGoogle></FaGoogle> Google Login
                      
                       </button>
            
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