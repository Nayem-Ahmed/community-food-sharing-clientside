import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = ({ slides }) => {
    return (
        <Swiper className='mt-8'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
 
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.img} >
                    <div className='relative'>
                        <img src={slide.img} alt={slide.title} />
                        <div className='absolute top-0 bottom-0 bg-white right-0 left-10 h-44 mt-40 w-80 p-4 hover:scale-75 duration-75'>
                            <p>{slide.title}</p>
                            <strong>{slide.subtitle}</strong>
                        </div>

                    </div>
                </SwiperSlide>

            ))}

        </Swiper>
    );
};

export default Slider;