import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

interface CardProps {
    image: string,
    altText: string,
    cardName: string
}


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const Card: React.FC<CardProps> = ({ image, altText, cardName }) => {


    return (
        <button 
            className='bg-white rounded-[10px] border border-[#D4D4D4] flex flex-col justify-center items-center w-[170px] h-[170px] hover:border-[#0090F5] hover:border-2 hover:text-[#0090F5]'
        >
            <div>
                <Image src={image} width={89} height={83} alt={altText} />
            </div>
            <div className={`${poppins.variable} font-sans font-medium text-xl`}>
                {cardName}
            </div>
        </button>
    )
}

export default Card