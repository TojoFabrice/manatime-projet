'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import accueil from '/public/icons/Accueil.svg'
import add from '/public/icons/Add.svg'
import stripe from '/public/icons/Stripe.svg'
import stripeBlue from '/public/icons/stripe_blue.svg'
import monEspace from '/public/icons/Mon_espace.svg'
import validation from '/public/icons/Validation.svg'
import indicateur from '/public/icons/Indicateurs.svg'
import soldes from '/public/icons/Soldes.svg'
import soldesBlue from '/public/icons/Soldes_blue.svg'
import recherche from '/public/icons/Recherche.svg'
import graphic from '/public/icons/Graphic.svg'
import { Poppins, Roboto } from 'next/font/google'


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})


const MenuSidebar = () => {
    const [solde, setSolde] = useState<boolean>(false)

    return (
        <div>
            <div className='w-full'>
                <ul>
                    <li className='bg-primary  border border-primary border-t-lineTop border-b-lineBottom h-66px flex items-center relative active:bg-blue-400'>
                        <Link href="/manatime" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={accueil} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className='text-center w-full h-[66px] absolute flex justify-center items-center'>
                                Accueil
                            </div>
                        </Link>
                    </li>
                    <li className='bg-primary  border border-primary border-t-lineTop border-b-lineBottom h-66px flex items-center relative active:bg-blue-400'>
                        <Link href="/addNew" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={add} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className='text-center w-full h-[66px] absolute flex justify-center items-center'>
                                Ajouter
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='bg-gradient-to-b from-gradientTop to-gradientBottom w-full h-[calc(100vh-198px)] relative'>
                <ul>
                    <li className={`z-10 border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative `}>
                        <Link href="#" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={monEspace} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className={`${poppins.variable} font-sans font-medium text-15px text-center w-full h-[66px] absolute flex justify-center items-center`} >
                                Mon espace
                            </div>
                            <div className='absolute right-[15px] inset-y-0 flex items-center'>
                                <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                            </div>
                        </Link>
                    </li>
                    <li className={`z-10 border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative `}>
                        <Link href="#" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={validation} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className={`${poppins.variable} font-sans font-medium text-15px text-center w-full h-[66px] absolute flex justify-center items-center`} >
                                Validation
                            </div>
                            <div className='absolute right-[15px] inset-y-0 flex items-center'>
                                <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                            </div>
                        </Link>
                    </li>
                    <li className={`z-10 border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative `}>
                        <Link href="#" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={indicateur} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className={`${poppins.variable} font-sans font-medium text-15px text-center w-full h-[66px] absolute flex justify-center items-center`} >
                                Indicateur
                            </div>
                            <div className='absolute right-[15px] inset-y-0 flex items-center'>
                                <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                            </div>
                        </Link>
                    </li>
                    <li className={`z-10 border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative ${solde ? 'bg-white text-[#084693] border-b-white' : ''}`} onClick={() => setSolde(!solde)}>
                        <Link href="#" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            {
                                solde ?
                                    <Image src={soldesBlue} alt="Abscence icon" width={22} height={22} className='ml-5' />
                                    :
                                    <Image src={soldes} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            }
                            <div className={`${poppins.variable} font-sans font-medium text-15px text-center w-full h-[66px] absolute flex justify-center items-center`} >
                                Soldes
                            </div>
                            <div className='absolute right-[15px] inset-y-0 flex items-center'>
                                {
                                    solde ?
                                        <Image src={stripeBlue} alt="Abscence icon" width={11} height={7} className='rotate-180 duration-500' />
                                        :
                                        <Image src={stripe} alt="Abscence icon" width={11} height={7} className='duration-500' />
                                }
                            </div>
                        </Link>
                    </li>
                    {
                        solde &&
                        <ul className='text-sousmenu bg-white'>
                            <li className='z-10 h-10 flex w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.className} font-roboto font-medium text-base hover:text-primary`}>Gestion des solde</Link>
                            </li>
                            <li className='z-10 h-10 flex w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.className} font-roboto font-normal text-base hover:text-primary`}>Ajuster un solde</Link>
                            </li>
                            <li className='z-10 h-10 flex  w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.className} font-roboto font-normal text-base hover:text-primary`}>Compteurs</Link>
                            </li>
                            <li className='z-10 h-10 flex  w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.className} font-roboto font-normal text-base hover:text-primary`}>Historique</Link>
                            </li>
                        </ul>
                    }
                    <li className={`z-10 border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative`}>
                        <Link href="#" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={recherche} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className={`${poppins.variable} font-sans font-medium text-15px text-center w-full h-[66px] absolute flex justify-center items-center`} >
                                Recherche
                            </div>
                            <div className='absolute right-[15px] inset-y-0 flex items-center'>
                                <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className='absolute bottom-0'>
                    <Image src={graphic} alt="Graphic" />
                </div>
            </div>
        </div>
    )
}

export default MenuSidebar