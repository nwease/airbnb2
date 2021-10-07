import React from 'react';
import Image from 'next/image'

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    className='rounded-xl'
                    src={img}
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div className='absolute top-40 left-12'>
                <h3 className='font-bold text-4xl mb-3 w-64'>
                    {title}
                </h3>

                <p>
                    {description}
                </p>

                <button className='bg-black text-white rounded-md px-4 py-2 mt-5'>
                    {buttonText}
                </button>
            </div>
        </section>
    );
}

export default LargeCard;
