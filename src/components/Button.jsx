import React from 'react';

const Button = ({text, link}) => {
    return (
        <a href={link} target='_blank' className='px-8 py-4 border-2 shadow-[0.4rem_0.4rem_0px_0px_black] font-outfit text-xl font-semibold cursor-pointer hover:shadow-[#ffe]  active:scale-90 transition-all duration-100'>
            {text}
        </a>
    );
};

export default Button;