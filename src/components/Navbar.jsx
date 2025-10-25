import React, { useState } from 'react';


const Navbar = () => {
    const [hamburgerOn, setHambargerOn] = useState(false);
    return (
        <>
            <div className='flex font-outfit px-4 md:px-[5%] lg:px-[10%] xl:px-[15%] bg-[#c4c4c4] flex-col relative'>
                <div className='text-black  py-6 flex items-center justify-between gap-x-6'>
                <div className='sm:text-4xl  text-3xl group font-semibold cursor-pointer'>
                    <a href="#"><p>DEV<span className='text-[#631e14]'>x</span>SAYEE<span className='group-hover:rotate-32 duration-150 inline-block'>D</span></p></a>
                </div>
                <div onClick={() => hamburgerOn ? setHambargerOn(false) : setHambargerOn(true)} className='flex md:hidden items-center justify-center flex-col gap-y-2 cursor-pointer'>
                    <div className={`w-9 h-1 bg-[#4d4848] ${hamburgerOn ? 'rotate-45 duration-150 translate-y-3' : 'block duration-150'}`}></div>
                    <div className={`w-9 h-1 bg-[#4d4848] ${hamburgerOn ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-9 h-1 bg-[#4d4848] ${hamburgerOn ? '-rotate-45 -translate-y-3 duration-150' : 'block duration-150'}`}></div>
                </div>
                <div className='text-2xl md:flex hidden items-center tex-[#631e14] justify-center gap-12 '>
                    <a className='flex flex-col group gap-y-1' href=""><p>Home</p>
                        <div className='group-hover:w-full  transition-all duration-150 w-0 bg-[#332c2b] h-[0.1rem]'></div>
                    </a>
                    <a className='flex flex-col group gap-y-1' href=""><p>Project</p>
                        <div className='group-hover:w-full  transition-all duration-150 w-0 bg-[#332c2b] h-[0.1rem]'></div>
                    </a>
                    <a className='flex flex-col group gap-y-1' href=""><p>Contact</p>
                        <div className='group-hover:w-full  transition-all duration-150 w-0 bg-[#332c2b] h-[0.1rem]'></div>
                    </a>
                </div>

            </div> 
            <div className={`fixed top-[10%] text-center left-0 z-20 h-screen w-full bg-[#000000ea] text-white flex flex-col items-center justify-start py-[30%] md:hidden transform transition-transform duration-300 ease-in-out ${hamburgerOn ? 'translate-x-0' : 'translate-x-full'}`}>
                <a className='w-full  text-3xl py-4 ' href="">Home</a>
                <a className='w-full text-3xl py-4' href="">Project</a>
                <a className='w-full text-3xl py-4' href="">Contact</a>
            </div>
            </div>

        </>
    );
};

export default Navbar;