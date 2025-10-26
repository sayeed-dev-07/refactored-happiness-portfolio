import React from 'react';
import Button from './Button';

const Card = ({ name, img, description, live, code}) => {
    return (

        <div className='bg-[#c4c4c4] text-[#313131] group duration-150  hover:-translate-x-1 hover:-translate-y-1 shadow-[0.3rem_0.3rem_0px_0px_black] md:shadow-[0.7rem_0.6rem_0px_0px_black] border-2 '>

            <div>
                <div className='w-full flex items-center justify-start gap-x-2 py-4 px-6'>
                    <p className='h-4 w-4 border-2 rounded-full bg-white'></p>
                    <p className='h-4 w-4 border-2 rounded-full bg-white'></p>

                </div>
            </div>
            <div style={{ backgroundImage: `url('${img}')` }} className='w-full transition-all duration-150 group-hover:blur-none blur-[0.08rem] bg-cover bg-center h-[200px] border-x-0 border-2'>
            </div>
            <div className='p-6 flex flex-col items-start justify-center gap-y-6'>
                <p className='text-3xl font-outfit font-semibold'>{name}</p>
                <p className='text-xl font-outfit'>{description}</p>
                <div className='flex items-center justify-between w-full flex-wrap gap-y-3'>
                    <Button text={'View Code'} link={code}/>
                    <Button text={'Live Preview'} link={live} />
                </div>
            </div>
        </div>
    );
};

export default Card;