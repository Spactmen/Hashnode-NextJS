import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useClickOutside } from '@react-hookz/web'
// import { useClickOutside } from '@react-hookz/web/esm/useClickOutside';

import { useRef } from 'react'
// import styles from '../styles/Home.module.css'
import useUserData from '../store/userDataStore'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import PersonalizedContent from '../components/MyFeed/PersonalizedContent'
import FollowingContent from '../components/MyFeed/FollowingContent'
import FeaturedContent from '../components/MyFeed/FeaturedContent'


// import personalisedsvg from '../public/personalizedsvg.svg'
// import followingsvg from '../public/followingsvg.svg'
// import featuredsvg from '../public/featuredsvg.svg'

// import PersonalisedSvg from "../puiblic/svg/PersonalisedSvg"
import PersonalisedSvg from "../public/svg/PersonalisedSvg"
import FollowingSvg from "../public/svg/FollowingSvg"
import TeamBlogSvg from "../public/svg/TeamBlogSvg"
import FavouritesSvg from "../public/svg/FavouritesSvg"


import filterSvg from '../public/filtersvg.svg'
import filterstyleSvg from '../public/filterstylesvg.svg'

import ExploreSvg from '../public/svg/ExploreSvg'
import FilterSvg from '../public/svg/FilterSvg'
import FilterStyleSvg from '../public/svg/FilterStyleSvg'
import DesktopMenu from '../components/DesktopMenu'
import Trending from '../components/Trending'
import HashnodeProBanner from '../components/HashnodeProBanner'
import BookMarks from '../components/BookMarks'
import WritingChallenges from '../components/WritingChallenges'
import Hiring from '../components/Hiring'

export default function Home() {
  // const userData = useUserData((state) => ({ userData: state.userData }))
  // console.log(userData)

  const router = useRouter()

  const activeTab = router.query.source || 'personalized'
  const personalized = router.query.source === 'personalized'
  const following = router.query.source === 'following'
  const featured = router.query.source === 'featured'

  const handleTabClick = (tab) => {
    router.push(`/?source=${tab}`, undefined, { shallow: true })
  }


  const [showMobileMenu, setShowMobileMenu] = useState(false);



  const renderContent = () => {
    switch (activeTab) {
      case 'personalized':
        return <PersonalizedContent />
      case 'following':
        return <FollowingContent />
      case 'featured':
        return <FeaturedContent />
      default:
        return <PersonalizedContent />
    }
  }
  // const headerRef = useRef(null)

  // useClickOutside(headerRef,() => {
  //   setShowMobileMenu(!showMobileMenu)
  // })


  return (
    <div className='w-full bg-grey'>
      <Header showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}></Header>
      {/* <div className={` ${showMobileMenu ? "backdrop-blur-3xl " : ""}`}> */}

        <main className={`w-full relative z-40 grid gap-4 min-w-full  sm:max-w-screen-sm md:max-w-screen-md lg:max-w-full lg:grid-cols-12 lg:px-2 xl:mx-auto xl:min-w-full xl:px-4 xxl:max-w-screen-xxl xxl:px-0 xxl:mx-auto xxl:min-w-0`} >
          <DesktopMenu></DesktopMenu>
          <div className='relative col-span-7 pt-5 pb-24'>
            {/* Banner 1 and 2 */}
            <div></div>
            <a></a>
            {/* main content */}
            <div className='border border-grey bg-white rounded-lg h-[200vh]'>
              <HashnodeProBanner isRight={false}></HashnodeProBanner>
              <div className='max-w-[100vw] relative z-20 flex justify-between items-center border-b border-grey px-5 pt-3 font-medium text-light-grey'>
                <div className='flex items-center overflow-x-auto max-w-full' style={{ overflow: "initial" }}>
                  <a
                    className={`relative font-primary flex items-center flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey font-semibold ${personalized ? 'text-dark-blue border-b-2 border-dark-blue ' : ' text-text-light-grey '}`}
                    onClick={() => handleTabClick('personalized')}>
                    {/* <object data="personalizedsvg.svg" type="image/svg+xml" ></object> */}

                    {/* <Image src={personalisedsvg} className='mr-2' alt="svg"></Image> */}
                    <span className='mr-2'><PersonalisedSvg></PersonalisedSvg></span>
                    <span className='whitespace-nowrap'>Personalized</span>
                  </a>
                  <a
                    className={`relative font-primary flex items-center  flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey font-semibold ${following ? 'text-dark-blue border-b-2 border-dark-blue ' : ' text-text-light-grey '}`}
                    onClick={() => handleTabClick('following')}>
                    {/* <Image src={followingsvg} className='mr-2' alt="svg"></Image> */}
                    <span className='mr-2 text-text-light-grey'><TeamBlogSvg></TeamBlogSvg></span>
                    <span className='whitespace-nowrap'>Following</span>
                  </a>
                  <a
                    className={`relative font-primary flex items-center  flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey font-semibold ${featured ? 'text-dark-blue border-b-2 border-dark-blue ' : ' text-text-light-grey '}`}
                    onClick={() => handleTabClick('featured')}>
                    {/* <Image src={featuredsvg} className='mr-2' alt="svg"></Image> */}
                    <span className='mr-2'><FavouritesSvg></FavouritesSvg> </span>
                    <span className='whitespace-nowrap'>Featured</span>
                  </a>
                </div>
                <div className='relative font-primary flex items-center'>
                  <div>
                    <button type="button" className='p-2 mr-4 hover:bg-common-grey rounded-full'>
                      <FilterSvg></FilterSvg>
                    </button>
                  </div>
                  <div className='relative flex items-center'>
                    <button className='flex items-center py-3 px-2 rounded-tl-lg rounded-tr-lg hover:bg-common-grey'>
                      <div className='mr-2'>
                        <FilterStyleSvg />
                      </div>
                      <span className='hidden md:block font-medium text-text-light-grey'> View</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {renderContent()}
              </div>
            </div>
          </div>
          {/* desktop right */}
          <aside className='hidden col-span-3 lg:block'>
            <div className='py-5'>
              <HashnodeProBanner isRight={true}></HashnodeProBanner>
              <Trending></Trending>
              <BookMarks></BookMarks>
              <WritingChallenges></WritingChallenges>
              <Hiring></Hiring>
            </div>
          </aside>
        </main>
      {/* </div> */}

    </div>


  )
}
