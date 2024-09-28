import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className='h-96 bg-slate-500 '
            >
                <SwiperSlide className='bg-red-700 cursor-pointer  '>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-yellow-700 cursor-pointer'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-orange-700 cursor-pointer'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-blue-700 cursor-pointer'>Slide 4</SwiperSlide>
                <SwiperSlide className='bg-green-700 cursor-pointer'>Slide 4</SwiperSlide>
                <SwiperSlide className='bg-red-700 cursor-pointer'>Slide 4</SwiperSlide>
                <SwiperSlide className='bg-blue-700 cursor-pointer'>Slide 4</SwiperSlide>
                ...
            </Swiper>
            <div className="swiper-button-next drop-shadow-2xl"></div>
            <div className="swiper-button-prev drop-shadow-2xl"></div>
        </div>
    );
};