import React from 'react';
import image from '../../../assets/bakgroundImg.avif'
import './ExtraSection.css'
const ExtraSection = () => {
    return (
        <div className='background-image  text-white mt-6 mb-8 pt-4 '>
                     <div className='md:flex justify-center items-center py-12 px-16'>
                <div className='relative'>
                    <img src={image} alt="" className='w-[1000px] h-[400px]' />
                  <div className='absolute top-3 left-2 text-sm lg:top-24 lg:left-20'>
                  <h3 className=' lg:text-3xl uppercase'>We Provide the best music  instruments  learning and we have the best teachers for this. </h3>
                       <p className='lg:text-xl mt-4  text-justify mr-3'>Expert Guidance and Support: Our team of dedicated instructors and music experts are here to support you every step of the way. Whether you need guidance on a specific technique, assistance with music theory, or advice on choosing the right instrument, we're here to help. Benefit from their expertise through personalized feedback, Q&A sessions, and live webinars.</p>
                       <button
           
              className="py-3 rounded-lg px-10  text-white mt-3 text-xl hover:bg-[#0f4b5e] bg-[#168aad]"
            >
              Contact Us
            </button>
                  </div>
                </div>
             
            </div>
        </div>
    );
};

export default ExtraSection;