import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const Feedback = () => {
 
   
  return (
    <div>
      <h2 className="text-5xl text-center font-semibold mt-10 uppercase underline text-[#168aad] italic">
        Feedback
      </h2>
      <div className=" mx-auto flex justify-center   mt-36 ">
      <form >
       
          <textarea
            name="feedback"
            placeholder="Give Feedback Here..."
            className="textarea textarea-bordered h-[400px] textarea-lg    w-full max-w-4xl"
          ></textarea>
          <button  className="py-3  w-full  rounded-lg px-10  text-white text-xl hover:bg-[#0f4b5e] bg-[#168aad]">
            Send Feedback
          </button>
      
      </form>
      </div>
    </div>
  );
};

export default Feedback;
