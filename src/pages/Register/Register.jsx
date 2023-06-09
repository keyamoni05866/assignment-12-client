import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser,updateUseProfile} = useContext(AuthContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if(data.password !== data.confirmPass){
        alert("password didn't match")
        return
    }
    console.log(data)
    createUser(data.email, data.confirmPass)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      
          updateUseProfile(data.name, data.photo)
          .then(()=>{
            reset();
            Swal.fire({
                title: 'User Created Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
          })
          .catch(error => console.error(error))
          navigate('/')
    })

    .catch(error =>console.error(error))

    

};

  return (
    <div className="  mx-auto bg-base-100 pt-5 ">
      <h2 className="text-center text-4xl text-[#168aad] font-semibold uppercase">
        Please Register
      </h2>
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <div className=" w-[500px]">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_3ow4EBdHI1.json"
          ></lottie-player>
        </div>

        <div className="w-1/2">
          <div className="card-body ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                 {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photo")}
                  className="input input-bordered"
                />
                 
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true , minLength: 6 , 
                    
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                
                })}
                  className="input input-bordered"
                />
                 {errors.password && <span className="text-red-500">This field is required</span>}
                 {errors.password?.type ==='minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                 {errors.password?.type ==='pattern' && <span className="text-red-500">Password must have one uppercase and characters</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPass", { required: true })}
                  className="input input-bordered"
                />
 {errors.confirmPass && <span className="text-red-500">This field is required</span>}
                <label className="label">
                  <p className="text-lg">
                    Already Have an Account?{" "}
                    <Link
                      to="/login"
                      className=" text-[#168aad] font-semibold ps-1"
                    >
                      {" "}
                      Please Login
                    </Link>
                  </p>
                </label>
              </div>

              <input
                type="submit"
                value="Register"
                className="py-3 w-full rounded-lg px-10 mt-2  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad] "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
