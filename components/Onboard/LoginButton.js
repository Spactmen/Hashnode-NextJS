import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GoogleSvg from '../../public/svg/GoogleSvg'

const LoginButton = (props) => {
    const { loginOption } = props
    return (
        <div className='w-full mx-auto my-4 md:w-2/3 xl:w-1/2 md:px-[0.6rem] xl:px-[0.47rem] xl:my-2'>
            <a href={loginOption.link} target='_blank' className='w-full flex items-center justify-center text-base text-text-grey font-primary font-semibold border border-grey bg-white px-3.5 py-[0.75rem] xl:[px-0.85rem]  leading-relaxed rounded-full gap-1 hover:bg-common-grey' >
                {loginOption.image}
                <p className='w-max font-semibold font-primary'>{loginOption.text}</p>
            </a>
        </div>
    )
}

export default LoginButton