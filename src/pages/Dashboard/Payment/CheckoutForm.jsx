import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const CheckoutForm = ({price}) => {
console.log(price)
   
    const  stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError, setCardError]= useState('');
    const [clientSecret, setClientSecret]= useState('');

   useEffect(()=>{
        axios.post('http://localhost:5000/create-payment-intent', {price})
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
   },[price])


    const handleSubmit = async( event )=>{
               event.preventDefault();
               if(!stripe || !elements){
                return 
               }
               const card = elements.getElement(CardElement);
               if(card === null){
                return
               }
            //    console.log('card', card)
            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card
            })
            if(error){
       
                setCardError(error.message)
            }
            else{
                setCardError('')
                
            }

            const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
             clientSecret,
              {
                payment_method: {
                  card: card,
                  billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'unknown'
                  },
                },
              },
            );
            if(confirmError){
              console.log(confirmError)

            }
            console.log(paymentIntent);

    }
    return (
       <>
        <form className="w-1/2 mx-auto mt-36" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {
            cardError && <p className='text-red-500'>{cardError}</p>
        }
        <button    className="btn hover:bg-[#0f4b5e] bg-[#168aad] text-white  mt-12 text-xl w-1/2  mx-36" type="submit" disabled={!stripe || !clientSecret }>
          Pay
        </button>
      </form>
       </>
    );
};

export default CheckoutForm;