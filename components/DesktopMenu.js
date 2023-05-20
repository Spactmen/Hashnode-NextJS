
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import useUserData from '../store/userDataStore'
import { useRouter } from 'next/router'

import ExploreSvg from '../public/svg/ExploreSvg'
import DraftsSvg from '../public/svg/DraftsSvg'
import BookmarksSvg from '../public/svg/BookmarksSvg'
import HackathonSvg from '../public/svg/HackathonSvg'
import TeamBlogSvg from '../public/svg/TeamBlogSvg'
import DoubleArrow from '../public/svg/DoubleArrow'
import { useEffect, useState } from 'react'


const DesktopMenu = () => {
    const router = useRouter()

    const handleMenuClick = () => {
        router.push(`/explore?source=explore_open`)
    }

    const [isExploreActive, setIsExploreActive] = useState(false);

    useEffect(() => {
      setIsExploreActive(router.pathname === "/explore");
    }, [router.pathname]);
  

    return (
        <>

            <div className='relative hidden  z-50 col-span-2 lg:block lg:relative'>
                <div className=' top-0 w-auto'>
                    <div className='my-5 flex flex-col py-2 text-text-black bg-white border border-grey overflow-y-auto overflow-x-hidden rounded-lg'>
                        <div className='mb-10 flex-1  '>
                            <a href="/explore?source=explore_open"
                                className={`flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2 ${isExploreActive ? 'text-dark-blue border-dark-blue border-r-2' : ' '} `}
                                onClick={() => handleMenuClick("explore")}
                            >
                                <span className='mr-4'>
                                    <ExploreSvg></ExploreSvg>
                                </span>
                                <span className=''>Explore</span>
                            </a>
                            <a href="/explore?source=explore_open"
                                className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2 '
                                onClick={() => handleMenuClick("explore")}
                            >
                                <span className='mr-4'>
                                    <DraftsSvg></DraftsSvg>
                                </span>
                                <span className=''>Drafts</span>
                            </a>
                            <a href="/explore?source=explore_open"
                                className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2 '
                            >
                                <span className='mr-4'>
                                    <BookmarksSvg></BookmarksSvg>
                                </span>
                                <span className=''>Bookmarks</span>
                            </a>
                            <a href="/explore?source=explore_open"
                                className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2'
                                onClick={() => handleMenuClick("explore")}
                            >
                                <span className='mr-4'>
                                    <HackathonSvg></HackathonSvg>
                                </span>
                                <span className=''>Hackathons</span>
                            </a>
                            <a href="/explore?source=explore_open"
                                className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2'
                                onClick={() => handleMenuClick("explore")}
                            >
                                <span className='mr-4'>
                                    <TeamBlogSvg></TeamBlogSvg>
                                </span>
                                <span className=''>Team Blogs</span>
                            </a>
                            <a href="/explore?source=explore_open"
                                className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue visited:border-r-2'
                                onClick={() => handleMenuClick("explore")}
                            >
                                <span className='mr-4'>
                                    <DoubleArrow></DoubleArrow>
                                </span>
                                <span className=''>More</span>
                            </a>
                            
                        </div>
                        {/* Socials media icons */}
                        <div></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DesktopMenu