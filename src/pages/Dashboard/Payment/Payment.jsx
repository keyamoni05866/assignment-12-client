import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import useClass from "../../../Hooks/useClass";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

const {id} = useParams();
// console.log(id)
  
  const [selectedClasses, refetch] = useClass();
  console.log(selectedClasses)
     const specificClass = selectedClasses.find(singleClass => singleClass._id ==  id);
    //  console.log(specificClass)
     const price = specificClass.price
    


  return (
    <div>
      <h2 className="animate-text mt-3 text-center bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-5xl text-3xl font-black italic mb-10 pt-8">
        Payment
      </h2>

      <Elements stripe={stripePromise}>
      
        <CheckoutForm price={price} specificClass={specificClass}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
