import React from 'react';


const Contact = () => {
    return (
        <div id='contact' className='bg-[#c4c4c4] px-4 md:px-[5%] lg:px-[10%] xl:px-[15%] py-[5%]'>
            <div className='flex flex-col lg:flex-row items-start justify-between gap-x-12 md:gap-y-2 gap-y-1'>

                <div>
                    <div className='flex flex-col leading-24 md:leading-42'>
                        <h1 className='font-change uppercase md:text-[12rem] text-transparent text-stroke-black wrap-break-word text-[5rem]'>
                            thank
                        </h1>
                        <h1 className='font-change uppercase md:text-[12rem] text-[5rem] wrap-break-word text-[#313131]'>
                            you
                        </h1>
                    </div>
                </div>


                <div className='font-outfit text-[#313131] py-12 text-2xl flex flex-col gap-y-4'>
                    <p className='text-4xl'>CONTACT</p>

                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <p>Email:</p>
                        <a
                            href='mailto:expsayeedshorif@gmail.com?subject=Hello&body=I want to contact you'
                            className='font-semibold wrap-break-word hover:underline'
                        >
                            expsayeedshorif@gmail.com
                        </a>
                    </div>

                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <p>Phone:</p>
                        <a href='tel:+8801727482794' className='font-semibold hover:underline'>
                            +880 1727-482794
                        </a>
                    </div>

                    <div className='flex items-center gap-x-2 flex-wrap'>
                        <p>LinkedIn:</p>
                        <a
                            className='font-semibold hover:underline'
                            target='_blank'
                            href='https://www.linkedin.com/in/sayeed-shorif-68080234b/'
                        >
                            Sayeed Shorif
                        </a>
                    </div>

                    <div className='flex gap-x-2 flex-wrap'>
                        <p>GitHub:</p>
                        <a
                            className='font-semibold hover:underline'
                            target='_blank'
                            href='https://github.com/sayeed-dev-07'
                        >
                            Sayeed Shorif
                        </a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;