import React from 'react';
import Card from './Card';
import Data from '../assets/Data';



const Projects = () => {
    return (
       <div className='px-4 md:px-[5%] lg:px-[10%] xl:px-[15%] py-[5%]'>
        <h1 className='text-5xl py-6 font-semibold '>Projects</h1>
         <div className='grid  grid-cols-1 lg:grid-cols-2 gap-10'>
            {Data.map(data => (
                <Card key={data.name} name={data.name} img={data.img} description={data.description} live={data.live} code={data.code}/>
            ))}
        </div>
       </div>
    );
};

export default Projects;