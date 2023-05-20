import React from 'react'
import Image from 'next/image'
import postprofile from '../public/postprofile.png'
import mastermind from '../public/masterming.jpeg'
import yellowstarsvg from '../public/yellowstarsvg.svg'
import booksvg from '../public/booksvg.svg'
import AddBookmark from '../public/svg/AddBookmark'
import LikeSvg from '../public/svg/LikeSvg'


import postimg1 from '../public/postimg1.jpeg'

const Post = () => {
    return (
        <div className='p-5 border-b border-grey'>
            {/* Post head */}
            <div className='relative mb-2'>
                <div className='font-primary flex items-center break-normal overflow-wrap-anywhere'>
                    <div className='relative mr-3 block rounded-full'>
                        <div className='w-10 h-10 xl:w-12 xl:h-12' >
                            <a href="https://google.com"> <Image src={postprofile} layout="responsive" className='rounded-full'></Image> </a>
                        </div>
                    </div>
                    <div className='font-base leading-[1.625rem]'>
                        <div className='flex flex-wrap items-center'>
                            <a hre="https://google.com" className='font-semibold text-text-black '> Paweł Dąbrowski </a>
                            <span className=' block mx-2 text-light-grey font-medium'> for </span>
                            <a href="https://google.com" className='flex items-center font-semibold text-text-black'>
                                <div className='mr-1 w-6 h-6 rounded-lg shadow-tw-shadow bg-white overflow-hidden'>
                                    <Image src={mastermind} alt="img" width={22} height={22}></Image>
                                </div>
                                Become mastermind
                            </a>
                        </div>
                        <div className='hidden text-light-grey md:flex'>
                            <a>blog.mastermind.dev</a>
                            <span className='block mx-2 font-bold text-input-grey'>.</span>
                            <a className='text-light-grey'> May 16, 2023</a>
                        </div>
                    </div>
                </div>
                <a className='hidden absolute top-0 right-0  items-center rounded-full text-xs font-bold py-1 px-2 bg-light-green uppercase border border-grey md:flex' >
                    <Image src={yellowstarsvg} alt="starimg" className='mr-1'></Image>
                    <span className='tracking-wide text-green '>Featured</span>
                </a>
            </div>

            {/* Post Data */}
            <div className='flex items-start flex-wrap md:flex-nowrap'>
                <div className='w-full mb-3 md:pr-5 md:mb-0 md:flex-1'>
                    <div className='mb-2 flex '>
                        <a className='flex items-center rounded-full text-xs font-bold py-1 px-2 bg-white uppercase border border-grey md:hidden' >
                            <Image src={yellowstarsvg} alt="starimg" className='mr-1'></Image>
                            <span className='tracking-wide text-green '>Featured</span>
                        </a>
                    </div>
                    <h1 className='mb-2 text-xl font-head_primary font-bold text-text-black break-normal overflow-wrap-anywhere md:text-2xl'>
                        <a href="https://google.com" className='block'>Understanding database Indexes in PostgreSQL</a>
                    </h1>
                    <div className='font-primary mb-2 flex flex-wrap items-center'>
                        <a className='mr-4 flex items-center font-medium text-text-black'>
                            <span>
                                <Image src={booksvg} alt="book" className='mr-2'></Image>
                            </span>
                            <span className='inline-block'> 19 min read</span>
                        </a>
                    </div>
                    <p className='leading-[1.375rem] font-primary block text-text-light-grey break-normal overflow-wrap-anywhere'>
                        <a className='block'>There are three types of developers: those who know that indexes speed up database queries, those who know that indexes speed up database queries and take additional space and time to write, and those…</a>
                    </p>
                    <div className='font-primary flex items-center flex-wrap text-light-grey font-medium mt-3 md:hidden'>
                        <a>blog.mastermind.dev</a>
                        <span className='block mx-2 font-bold text-input-grey'>.</span>
                        <a className='text-light-grey'> May 16, 2023</a>
                    </div>
                </div>
                {/* Post img */}
                <div className=' flex-shrink-0 w-full md:w-64'>
                    <a className='relative block w-full h-full overflow-hidden rounded-xl border border-grey bg-very-light-grey'>
                        <Image src={postimg1} alt="postimg"></Image>
                    </a>
                </div>

            </div>

            {/* Post Impressions */}
            <div className='mt-3 flex items-center justify-between flex-col-reverse flex-wrap md:flex-row'>
                <div className='mt-3 flex w-full md:mt-0 md:flex-1'>
                    <div className='flex flex-1 md:flex-auto'>
                        <div className='mr-3'>
                            <button className='border border-transparent px-3 py-1 w-10 h-10 text-base leading-[1.65rem] hover:bg-common-grey rounded-full'>
                                <AddBookmark></AddBookmark>
                            </button>
                        </div>
                        <div className='flex items-center text-sm  mr-2'>
                            <a className='block w-20 text-ellipsis overflow-hidden whitespace-nowrap rounded-lg px-2 text-center leading-[1.625rem] font-primary font-medium text-light-grey border  py-1  mr-1 hover:border-grey hover:bg-grey hover:text-text-black sm:w-24 md:w-auto md:max-w-[8rem]' >PostgreSQL</a>
                            <a className='block w-20 text-ellipsis overflow-hidden whitespace-nowrap rounded-lg px-2 text-center leading-[1.625rem] font-primary font-medium text-light-grey border py-1  mr-1 hover:border-grey hover:bg-grey hover:text-text-black sm:w-24 md:w-auto md:max-w-[8rem]'> Databases</a>
                            <a className='block text-ellipsis overflow-hidden whitespace-nowrap rounded-lg px-2 text-center leading-[1.625rem] font-primary  font-medium text-light-grey border py-1  mr-1 hover:border-grey hover:bg-grey hover:text-text-black sm:w-24 md:w-auto md:max-w-[8rem]'> +2</a>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-centers md:w-auto md:pl-0'>
                    <div className='flex flex-wrap items-center'>
                        <button className='inline-flex  items-center justify-center text-center font-medium  text-sm py-1 px-2 rounded-full hover:bg-common-grey '>
                            <span className='mr-1'><LikeSvg></LikeSvg></span>
                            <span>37</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post