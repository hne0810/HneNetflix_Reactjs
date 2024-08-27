import React from 'react';
import { imageApp } from 'src/assets/images';

const Banner = () => {
    return (
        <div className='w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative'>
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40' />
            <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
                <div className='flex flex-col space-y-5 items-baseline w-[50%]' >
                    <p className='text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3'>
                        TV Show
                    </p>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-white text-[40px] font-bold'>
                            Nghe nói em thích toi
                        </h2>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <img src={imageApp.rating} alt="Rating Star" className='w-8 h-8'  />
                        <img src={imageApp.rating} alt="Rating Star" className='w-8 h-8'  />
                        <img src={imageApp.rating} alt="Rating Star" className='w-8 h-8'  />
                        <img src={imageApp.rating_half} alt="Half Rating Star" className='w-8 h-8' />
                    </div>
                    <p className='text-white'>
                        Lorem Ipsum is simply text of the
                        printing and typesseting industry. Lorem
                        Ipsum has been the standard dummy text
                        ever since the 1500s, when an unknown 
                        printer took a galley of type and scramble it
                        to make a type specimen book. It has
                        survived not only five centuries but also the
                        leap into elctronic typesetting
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button className='p-3 text-white bg-black font-bold text-sm'>
                            Chi Tiết
                        </button>
                        <button className='p-3 text-white bg-red-600 font-bold text-sm'>
                            Xem phim
                        </button>
                    </div>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                        <img src={imageApp.banner} alt='temp'
                            className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                        <img src={imageApp.playIcon}
                            className='w-16 h-16' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
