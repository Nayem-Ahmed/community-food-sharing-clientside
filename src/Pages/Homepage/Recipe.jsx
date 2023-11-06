import React from 'react';

const Recipe = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 my-9'>
            <div className='basis-2/3'>
                <img className='h-96 w-full' src="https://i.ibb.co/jzHmNzQ/h6-img-1.jpg" alt="" />
                <h2 className='md:text-4xl font-semibold mb-2 my-2'>Cupcakes with pistachio<br></br> frosting</h2>
                <p className='text-gray-500 mb-5'>These are the base of the dessert. Cupcakes are typically small, individual cakes that are baked in a muffin tin. They have a tender crumb and are often flavored with vanilla or other sweet ingredients. Cupcakes provide the perfect canvas for a variety of frostings and toppings.</p>

                <img className='h-96 w-full' src="https://i.ibb.co/brx827V/h6-img-2.jpg" alt="" />
                <h2 className='md:text-4xl font-semibold mb-2 my-2'>Wild mushroom, spinach and <br></br>lentil salad frosting</h2>
                <p className='text-gray-500'>These are the base of the dessert. Cupcakes are typically small, individual cakes that are baked in a muffin tin. They have a tender crumb and are often flavored with vanilla or other sweet ingredients. Cupcakes provide the perfect canvas for a variety of frostings and toppings.</p>
            </div>

            <div className='basis-1/3'>
                <img src="https://i.ibb.co/Fhz9NZJ/h6-img-9.jpg" alt="" />
                <p className='mt-3 text-gray-500'>At the heart of this creation is the vanilla chia pudding, a marvel of culinary ingenuity. Chia seeds, when soaked in a liquid of your choice, transform into a luscious and thick pudding with a subtle crunch. </p>

                <img src="https://i.ibb.co/zSzhSLM/h6-img-7.jpg " alt="" />
                <p className='mt-3 text-gray-500 mb-6'> The poached egg takes center stage alongside the avocado. Poaching is a gentle cooking method that involves simmering an egg in water until the white is set but the yolk remains gloriously runny. When done perfectly, the yolk becomes a luscious, golden sauce that oozes over the avocado and toast when you cut into it. </p>

                <img src="https://i.ibb.co/DtnpLD8/h6-img-8.jpg" alt="" />
                <p className='mt-3 text-gray-500'> The orange's bright color and zesty character evoke a feeling of energy and positivity.</p>
            </div>

        </div>
    );
};

export default Recipe;