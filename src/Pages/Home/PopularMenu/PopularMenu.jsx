import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/sectionTitle';
import MenuItem from '../../../Components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => 
            {
                const popularItem = data.filter(item=> item.category === 'popular')
                setMenu(popularItem)})
             
    }, [])
    return (
        <div className='mb-10'>
            <section>
                <SectionTitle
                    subheading={'Check It Out'}
                    heading= {'From Our Menu'}
                ></SectionTitle>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        menu.map(item=> <MenuItem
                            key={item._id}
                            item= {item}
                        ></MenuItem>)
                    }
                </div>

            </section>
        </div>
    );
};

export default PopularMenu;