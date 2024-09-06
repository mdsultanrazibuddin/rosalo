import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


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

            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
                {
                    review.map( review => <SwiperSlide
                    key = {review._id}
                    >
                        <div>

                            <p>{review.details}</p>
                        </div>
                    </SwiperSlide>)
                }
      </Swiper>
            </div>
       </section>
    );
};

export default Testimonial;