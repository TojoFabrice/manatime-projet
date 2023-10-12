import React from 'react'
import Image from 'next/image'
import absenceIcon from '../../../public/icons/Absence_Icon.svg'
import stripe from '../../../public/icons/stripe2.svg'
import soldes from '../../../public/icons/Soldes_grey.svg'
import profil from '../../../public/images/Photo.png'
import help from '../../../public/icons/Help.svg'
import settings from '../../../public/icons/Settings.svg'
import Link from 'next/link'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const MenuBar = () => {
  return (
    <div className='w-full h-[66px] bg-white flex justify-between items-center px-[30px]'>
      <div className={`flex text-menu items-center space-x-[30px]`} >
        <Image src={absenceIcon} alt="Abscence icon" width={38} height={38} />
        <div className={`${poppins.variable} font-sans font-medium text-2xl`}>
          <Link href="#">Absence</Link>
        </div>
        <span>
          <Image src={stripe} alt="stripe" width={10} height={19} />
        </span>
        <div className='flex items-center space-x-[30px]'>
          <div>
            <Image src={soldes} alt="soldes" width={26} height={23} color='black'/>
          </div>
          <div className={`${poppins.variable} font-sans font-medium text-base text-sousmenu`}>
            <Link href="#">Sous module</Link>
          </div>
        </div>
        <span>
          <Image src={stripe} alt="stripe" width={10} height={19} />
        </span>
        <div>
          <div className={`${poppins.variable} font-sans font-normal text-base text-sousmenu`}>
            <Link href="#"> Sous sous module</Link>
          </div>
        </div>
      </div>

      <div className='flex space-x-[30px] items-center'>
        <div className='flex space-x-[10px]'>
          <Image src={help} alt="profil" width={42} height={42} />
          <Image src={settings} alt="profil" width={42} height={42} />
        </div>
        <span className='w-[1px] h-[42px] bg-sousmenu block'></span>
        <div>
          <div className={`${poppins.variable} font-sans font-normal text-menu text-base`}>Nom et prénom</div>
          <div className={`${poppins.variable} font-sans font-normal text-sousmenu text-center text-sm`}>Entreprise</div>
        </div>
        <div className='w-[42px] h-[42px] relative'>
          <Image src={profil} alt="profil"  fill/>
          <span className='absolute block w-3 h-3 rounded-full bg-green z-10 right-0'></span>
        </div>
      </div>
    </div>
  )
}

export default MenuBar