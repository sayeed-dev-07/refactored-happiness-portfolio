import React from 'react';
import me from '/images/about.png'
const AboutMe = () => {
    return (
        <div className='px-4 md:px-[5%] lg:px-[10%] xl:px-[15%] w-full bg-[#c4c4c4] gap-x-3 min-h-screen flex items-center justify-center py-[10%] lg:flex-row gap-y-2 flex-col'>
            <div className='lg:w-[40%] w-full sm:max-w-[70%]'>
                <img className='w-full' src={me} alt="" />
            </div>
            <div className='flex-1'>
                <p className='lg:text-5xl text-3xl sm:text-4xl py-8 font-outfit font-semibold'>About Me</p>
                <p className='text-2xl font-outfit '>
                    Hi, my name is <span className='font-play duration-150 text-gray-700 font-semibold '>Sayeed</span>. I started out as a web designer in
                    <span className='font-play  font-semibold  text-gray-700'> 2022</span>. However, over the past year I’ve been diving into web
                    development because I wanted to really grow my skills and build
                    things that people enjoy using. I mainly focus on front-end
                    development, JavaScript, and UX, and I love creating websites and
                    apps that are both functional and memorable. Everything you see in
                    my projects was planned, designed, and built by me. My goal is to
                    mix usability, fun, and performance so that my work leaves a lasting
                    impression. If you’re curious, feel free to check out my projects
                    below!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;