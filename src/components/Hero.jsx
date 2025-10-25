import React from 'react';

const Hero = () => {
    return (
        <div className='min-h-[90vh] flex items-center justify-center xl:justify-start text-white px-4 md:px-[5%] lg:px-[10%] xl:px-[15%]'>
            <div 
                className={`xl:w-[70%] group sm:relative w-full bg-center bg-cover sm:bg-contain bg-no-repeat  min-h-[50vh]  bg-[url('/images/hero-mini.png')] sm:bg-[url('/images/hero.png')] py-[15%]  xl:py-[10%] justify-self-center`}>
                    <div className='sm:absolute  flex flex-col py-[15%] px-[8%] sm:py-0 sm:px-0 gap-y-6 top-[40%] left-[5%] sm:left-[10%] z-10 font-bungee text-[#2a3221]'>
                        <p className='md:text-5xl   font-semibold text-3xl sm:text-4xl'><span className='group-hover:rotate-180 inline-block duration-300'>H</span><span className='group-hover:rotate-180 inline-block duration-300'>I</span>, Im <span className=''>Sayeed</span> </p>
                        <p className='text-xl sm:text-2xl font-medium'>{"< Webdesigner and Web Developer />"}</p>
                    </div>
            </div>
        </div>
    );
};

export default Hero;