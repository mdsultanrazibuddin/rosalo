import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



const Testimonial = () => {
    const [review, setReview] = useState([])

    useEffect(()=>{
    fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    
    }, [])
    return (
       <section>
            <SectionTitle
            subheading={'What Our Clients Say'}
            heading={'Testimonials'}
            ></SectionTitle>
            {/* Swiper */}

            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
                {
                    review.map( review => <SwiperSlide
                    key = {review._id}
                    >
                        <div className='flex flex-col items-center mx-24 mt-5 mb-16'>
                            {/* React Awesome star rating */}
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /> 
                            {/* React Icon */}
                            <div className='text-6xl mt-5'>
                                  <FaQuoteLeft />
                            </div>
                          

                            <p className='my-5 text-xl text-center'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400 uppercase'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
      </Swiper>
            </div>
       </section>
    );
};

export default Testimonial;