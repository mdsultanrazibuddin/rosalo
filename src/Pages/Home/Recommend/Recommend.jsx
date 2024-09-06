import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';
import img1 from "../../../assets/home/slide2.jpg";
import img2 from "../../../assets/home/slide4.jpg";
import img3 from "../../../assets/home/slide5.jpg";

const Recommend = () => {
    return (
        <section>
            <SectionTitle
            subheading={"Should Try"}
            heading={"Chef Recommends"}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 mx-32'>
                <div className=" bg-base w-80 shadow-xl">
                    <figure className=''>
                        <img className='h-80 w-96'
                        src={img1}
                        alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizzas</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatibus!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-5 text-xl">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className=" bg-base w-80 shadow-xl">
                    <figure className=''>
                        <img className='h-80 w-96'
                        src={img2}
                        alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Desserts</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatibus!</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-5 text-xl">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className=" bg-base w-80 shadow-xl">
                    <figure className=''>
                        <img className='h-80 w-96'
                        src={img3}
                        alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salads</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatibus!</p>
                        <div className="card-actions justify-end mt-5">
                        <button className="btn btn-outline btn-warning border-0 border-b-4 mt- text-xl">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Recommend;