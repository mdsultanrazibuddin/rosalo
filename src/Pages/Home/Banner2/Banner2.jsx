import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';

const Banner2 = () => {
    return (
        <section className='mx-32'>
            <SectionTitle 
             subheading = {" From 11.00am to 10.00pm "}
             heading ={ "Order Online "}
            >
               
            </SectionTitle>
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-2xl uppercase text-center -mt-16 mb-4 text-white'> Salads</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className='text-2xl uppercase text-center -mt-16 mb-4 text-white'> Pizzas</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className='text-2xl uppercase text-center -mt-16 mb-4 text-white'> Soups</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className='text-2xl uppercase text-center -mt-16 mb-4 text-white'> Desserts</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className='text-2xl uppercase text-center -mt-16 mb-4 text-white'> Salads</h2>
          </SwiperSlide>
         
        </Swiper>
        </section>
    
    );
};

export default Banner2;