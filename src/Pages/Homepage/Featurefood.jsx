import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Featurecard from './Featurecard';

const Featurefood = () => {
    const featureloader = useLoaderData()
  
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-5 '>Feature <span className='text-[#e67e22] underline'>Food</span></h1>
            <div className='py-8 grid md:grid-cols-3 gap-4'>
                {
                    featureloader.slice(0,6).map(featurecard => <Featurecard key={featurecard.food_image} featurecard={featurecard}></Featurecard>)
                }
            </div>
            <div className='mx-auto text-center'>
                <Link to="/availablefoods"><button className='btn  bg-[#e67e22] text-white'>Show All</button></Link>
            </div>

        </div>
    );
};

export default Featurefood;