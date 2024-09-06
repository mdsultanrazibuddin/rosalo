import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './FeatureItem.css'

const FeatureItem = () => {
    return (
        <div className="featured my-20 bg-fixed text-white pt-10 ">
            <SectionTitle 
            heading = {'From Our Menu'}
            subheading={'Chect It Out'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36 '>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20,2023</p>
                    <p className='uppercase'>Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima sed soluta dolor
                     perferendis ipsam corrupti voluptatibus dignissimos consequatur consectetur?</p>
                     <button className="btn btn-outline border-0 border-b-4 mt-5">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default FeatureItem;