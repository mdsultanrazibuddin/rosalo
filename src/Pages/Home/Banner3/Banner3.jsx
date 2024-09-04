import React from 'react';
import banner3 from "../../../assets/home/chef-service.jpg";

const Banner3 = () => {
    return (
        <div className='mb-24'>
            <div className=''>
                 <img src={banner3} alt="" />
            </div>
            <div className=' h-20 w-20 border-solid text-2xl  text-center '>
                <h2 className='text-4xl uppercase '> Rosalo</h2>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores commodi magni soluta inventore, nulla sed?</p>
            </div>
        </div>
    );
};

export default Banner3;