import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' max-w-5xl mx-auto flex justify-center items-center mt-20'>
             <div className=" w-[500px]">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_2pqrj2bi.json"
          ></lottie-player>
             <h3 className='text-4xl text-center font-semibold'>Oppsss!!!! <br /> You are in the Wrong Page!!!</h3>
       <div className='mt-9 ms-36'>
     
       <Link
              to="/"
              className="py-3 rounded-lg px-10 mt-24 uppercase t text-white text-xl hover:bg-[#0f4b5e] bg-[#0d5d75]"
            >
            Go back to home
            </Link>
       </div>
        </div>
   
        </div>
    );
};

export default Error;