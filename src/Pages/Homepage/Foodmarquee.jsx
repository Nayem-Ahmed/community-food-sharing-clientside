import React from 'react';
import Marquee from "react-fast-marquee";


const Foodmarquee = () => {
    return (
       
            <Marquee direction='right' pauseOnHover className='my-8'>
 
                <img className='mr-5 ml-5' src="https://i.ibb.co/ZmCkHZT/h1-clients-img-5a-1.png" alt="" />
                <img className='mr-5 ml-5' src="https://i.ibb.co/pRMT61G/h1-clients-img-6a.png" alt="" />
                <img className='mr-5 ml-5' src="https://i.ibb.co/ZmCkHZT/h1-clients-img-5a-1.png" alt="" />
                <img className='mr-5 ml-5' src="https://i.ibb.co/wJ9mt8D/h1-clients-img-4a.png" alt="" />
                <img className='mr-5 ml-5' src="https://i.ibb.co/z7gyBnT/h1-clients-img-3a.png" alt="" />
                <img className='mr-5 ml-5' src="https://i.ibb.co/NsjnFVM/h1-clients-img-2a.png" alt="" />
 
            </Marquee>

    
    );
};

export default Foodmarquee;