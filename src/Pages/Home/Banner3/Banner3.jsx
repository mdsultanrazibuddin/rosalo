import React from 'react';
import'./Banner3.css'
import banner3 from '../../../assets/home/chef-service.jpg'


const Banner3 = () => {
    return (
       <div>
        <img src={banner3} alt="" />
         <div className=' bg-white text-center -mt-32 text-white'>
            <div className=' '>
                <h2 className='text-4xl'> Rosalo</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, omnis!</p>
            </div>
        </div>
       </div>
    );
};

export default Banner3;