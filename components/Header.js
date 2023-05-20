import React from 'react'
import Image from 'next/image'
import LogoSvg from '../public/svg/LogoSvg'
import UpdateSvg from '../public/svg/UpdateSvg'
import hamburgermenu from '../public/hamburgermenu.svg'
import logosvg from '../public/logosvg.svg'

import profilemain from '../public/profilemain.jpeg'

import dropdown2svg from '../public/dropdown2.svg'
const Header = () => {
    return (
        <header className='relative z-50 max-h-[72px]'>
            {/* To Open Hamburger menu */}
            <div></div>
            {/* Normal Desktop Menu */}
            <div className='flex w-full relative z-20 py-4 border-b border-grey'>
                <div className='w-full grid grid-cols-12 gap-4 px-4 mx-auto sm:max-w-screen-sm  md:max-w-screen-md lg:max-w-full lg:px-6 xl:max-w-full xl:px-8 xxl:max-w-screen-xxl xxl:px-4'>
                    <div className='col-span-4 flex items-center justify-start'>
                        <button className='px-2 py-1 font-medium mr-2' >
                            <Image src={hamburgermenu} alt="menu"></Image>
                        </button>
                        <span>
                            <a href='/' className='w-36 md:w-44 lg:w-full xl:w-44 xl:pr-2'>
                                {/* <svg></svg> */}
                                {/* <LogoSvg></LogoSvg> */}
                                {/* <Image src={logosvg} className='w-full'></Image> */}
                                {/* <object data="logoSvg.svg" type="image/svg+xml" className='max-w-full'></object> */}
                            </a>
                        </span>
                    </div>
                    {/* Writte div */}
                    <div className='hidden'></div> 
                    <div className='col-span-8 flex items-center justify-end'>
                    {/* update */}
                    <div className='hidden'></div>
                    {/* dark mode */}
                    <button></button>
                    {/*  Notifications*/}
                    <div className='hidden'></div>
                    {/*  Notifications extra*/}
                    <div></div>
                    {/*  profile*/}
                    <div className='w-10 h-10'>
                        <button>
                            <Image src={profilemain} className='rounded-full'></Image>
                        </button>
                    </div>
                    {/*  profile extra*/}
                    <div className='hidden'></div>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header