import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Availablefoodcart from './Availablefoodcart';

const AvailableFoods = () => {
    const availablefoodloader = useLoaderData();
    return (
        <div>
            <div>Filter Section:</div>
            <div>Sorting Section:</div>
            <div>
                <h1 className='text-center font-bold text-3xl mt-5 text-[#e67e22] underline'>Foods Section</h1>
                <div className='py-8 grid md:grid-cols-3 gap-4'>
                    {
                        availablefoodloader.map(availablecart => <Availablefoodcart key={availablecart.food_image} availablecart={availablecart}></Availablefoodcart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;