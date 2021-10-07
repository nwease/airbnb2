import React from 'react';
import Image from 'next/image'

function MediumCards({img, title}) {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image
                    className='rounded-xl'
                    src={img}
                    layout='fill'
                />
            </div>

            <h3 className='font-semibold text-lg mt-2.5'>
                {title}
            </h3>
        </div>
    );
}

export default MediumCards;
