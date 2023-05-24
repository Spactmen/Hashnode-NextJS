import React from 'react'
import Image from 'next/image'
import hashnodepro from '../public/hashnodepro.avif'
import CloseSvg from '../public/svg/CloseSvg.js'

import bgimg from "../public/bgimage.png"

const HashnodeProBanner = (props) => {
    const isRight = props.isRight


    return (
        <div className={`flex flex-col  justify-start  gap-5 border border-grey bg-cover bg-no-repeat bg-center p-4 mb-5 md:flex-row md:justify-between   ${isRight?'lg:flex-col lg:items-center lg:rounded-lg lg:p-6':'lg:hidden'}`} style={{ backgroundImage: `url(${bgimg.src})`,objectFit:'cover',backgroundRepeat:'no-repeat' }}>
            <div className='flex flex-col items-start gap-3 md:gap-2 lg:gap-[0.625rem] '>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={hashnodepro} alt="img" width={24} height={24} className='flex-shrink-0'></Image>
                        <h2 className='font-head_primary text-lg font-extrabold text-transparent bg-gradient-to-br from-dark-blue to-violet ml-2 bg-clip-text'>Introducing Hashnode Pro</h2>
                    </div>
                    <div className='md:hidden'>
                        <button className='inline-flex items-center justify-center p-1 text-text-grey rounded-full hover:bg-common-grey '>
                            <CloseSvg></CloseSvg>
                        </button>
                    </div>
                </div>
                <p className='font-primary text-left text-base leading-6 font-medium text-text-grey lg:max-w-[250px]'>Level up your publishing with our new suite of premium features</p>
            </div>
            <div className=' font-primary flex items-center justify-center gap-9  lg:w-full lg:items-stretch lg:flex-col xl:flex-row xl:w-auto'>
                <div className='flex items-center gap-8 lg:flex-col lg:gap-2 xl:flex-row'>
                    <button className='bg-gradient-to-bl from-dark-blue to-violet  text-white px-4 py-[0.375rem] text-base font-normal whitespace-nowrap overflow-hidden rounded-full lg:w-full xl:w-auto'>Upgrade now</button>
                    <button className='text-sm px-4 py-[0.375rem] text-text-light-grey border border-light-grey whitespace-nowrap overflow-hidden rounded-full lg:w-full xl:w-auto hover:bg-[rgb(248,250,252)]'>Learn more</button>
                </div>
                {/* close horixzonatla */}
                <div className={`hidden md:block ${isRight ? 'lg:hidden' : ' '}`}>
                    <button className='inline-flex items-center justify-center p-1 text-text-grey rounded-full hover:bg-common-grey '>
                        <CloseSvg></CloseSvg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HashnodeProBanner