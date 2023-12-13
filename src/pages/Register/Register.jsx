import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUseProfile, googleSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      alert("password didn't match");
      return;
    }
    console.log(data);
    createUser(data.email, data.confirmPass)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUseProfile(data.name, data.photo)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              photo: data.photo,
            };
            fetch("https://assignment-12-server-eight-brown.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    title: "User Created Successfully",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.error(error));
      })

      .catch((error) => console.error(error));
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
          fetch("https://assignment-12-server-eight-brown.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "User Created Successfully",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate("/");
              }
            });

         })
     
         .catch(error =>console.error(error))
 }
  return (
    <div className="  mx-auto bg-base-200 pt-5 ">
      <h2 className="text-center text-4xl text-[#168aad] font-semibold uppercase">
        
      </h2>
      <div className="flex items-center justify-center  mx-auto ">
        <div className=" w-[500px]">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_3ow4EBdHI1.json"
          ></lottie-player>
        </div>

        <div className="  w-4/12">
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
                  required
                  placeholder="Email"
                  {...register("email")}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                  required
                  placeholder="Password"
                  {...register("password", {
                   
                    minLength: 6,

                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
              
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one uppercase and characters
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>

                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  {...register("confirmPass")}
                  className="input input-bordered"
                />
                {/* {errors.confirmPass && (
                  <span className="text-red-500">This field is required</span>
                )} */}
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
              <div className="flex w-full gap-3">
                <input
                  type="submit"
                  value="Register"
                  className="py-2 w-1/2 rounded-lg px-2 mt-2  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad] "
                />
                  <button onClick={handleGoogle} className="flex items-center gap-2  shadow-lg justify-center text-xl w-1/2 py-3 rounded-lg px-2   mt-2  text-white  border bg-[#738b92]">
                        <FaGoogle></FaGoogle> Google SignUp
                      
                       </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
