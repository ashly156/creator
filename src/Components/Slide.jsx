import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Slide = () => {
    return (
        <>
            <diV className="bg-[#A873E80A] py-10 text-center">
                <h2 className='text-base lg:text-6xl font-semibold'>Around 5M+ creators</h2>
                <p className='text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor incididunt ut la</p>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5.5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='mx-auto w-3/4 overflow-visible'>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=male' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Rick Sanchez</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=female' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Raymonde </p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=male' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Rick Sanchez</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=female' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Cordia Sillings</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=male' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Rebecca Burucki</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=female' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Shakira Pourier</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=male' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Maria Hugh</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=female' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Cordia Sillings</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative cursor-pointer flex justify-center p-4 h-[360px] w-[256px] hover:border-solid hover:border-2 border-[#22222266]'>
                            <img src='https://xsgames.co/randomusers/avatar.php?g=male' className='w-full' />
                            <p className='absolute bottom-0 text-3xl text-white mb-6 font-black'>Rebecca Burucki</p>
                            <span className='absolute top-0 right-0 m-6 py-1 px-2 text-3xl text-black rounded-full bg-white text-xs font-medium'>Active</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </diV >
        </>

    )
}

export default Slide