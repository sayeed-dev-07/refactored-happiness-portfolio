import React from 'react';

const Hero = () => {
    return (
        <div className='min-h-[90vh] flex items-center justify-center xl:justify-start text-white'>
            <div 
                className={`xl:w-[70%] sm:relative w-full bg-center bg-cover sm:bg-contain bg-no-repeat  min-h-[50vh]  bg-[url('/images/hero-mini.png')] sm:bg-[url('/images/hero.png')] py-[15%]  xl:py-[10%] justify-self-center`}>
                    <div className='sm:absolute flex flex-col py-[15%] px-[8%] sm:py-0 sm:px-0 gap-y-6 top-[40%] left-[5%] sm:left-[10%]'>
                        <p className='md:text-5xl font-semibold text-3xl sm:text-4xl'>Hi, Im Sayeed </p>
                        <p className='text-xl sm:text-2xl font-medium'>{"< Webdesigner and Web Developer />"}</p>
                    </div>
            </div>
        </div>
    );
};

export default Hero;