'use client'

import { useVisibilityContext } from '@/app/context/VisibilityContext';
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/icons/Logo.svg'
import Card from '../card/Card';
import { listModule } from '@/app/data/listModule';

const Modal = () => {
    const { isVisible, setIsVisible } = useVisibilityContext();
    if (!isVisible) return
    return (
        <div className='absolute inset-0 bg-[#CECECE] bg-opacity-40 backdrop-blur-sm flex justify-start'>
            <div className='w-[800px] h-screen '>
                <div className='bg-white p-4 h-screen text-black rounded-r-[40px]'>
                    <div className='flex justify-center mt-[118px]'>
                        <Image src={logo} alt="Logo" width={350} height={72.5} />
                    </div>
                    <div className='w-full mt-[80px]'>
                        <div className='flex flex-wrap gap-[6px] ml-9'>
                            {
                                listModule.map((item: any, key: number) => (
                                    <Card image={item.image} altText={item.altTitle} cardName={item.title} key={key} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
