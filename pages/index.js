import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import useUserData from '../store/userDataStore'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import PersonalizedContent from '../components/PersonalizedContent'
import FollowingContent from '../components/FollowingContent'
import FeaturedContent from '../components/FeaturedContent'


import personalisedsvg from '../public/personalizedsvg.svg'
import followingsvg from '../public/followingsvg.svg'
import featuredsvg from '../public/featuredsvg.svg'
import filterSvg from '../public/filtersvg.svg'
import filterstyleSvg from '../public/filterstylesvg.svg'

import ExploreSvg from '../public/svg/ExploreSvg'
import FilterSvg from '../public/svg/FilterSvg'
import FilterStyleSvg from '../public/svg/FilterStyleSvg'
import DesktopMenu from '../components/DesktopMenu'
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


  return (
    <div className='w-full bg-grey'>
      <Header></Header>
      <main className='w-full relative z-40 grid gap-4 min-w-full bg-grey sm:max-w-screen-sm md:max-w-screen-md lg:max-w-full lg:grid-cols-12 lg:px-2 xl:mx-auto xl:min-w-full xl:px-4 xxl:max-w-screen-xxl xxl:px-0 xxl:mx-auto xxl:min-w-0'>
        {/* menu for desktop */}
        {/* <div className='relative hidden  z-50 col-span-2 lg:block lg:relative'>
          <div className=' top-0 w-auto'>
            <div className='my-5 flex flex-col py-2 text-text-black bg-white border border-grey overflow-y-auto overflow-x-hidden rounded-lg'>
              <div className='mb-10 flex-1  '>
                <a href="/explore?source=explore_open" 
                  className='flex items-center font-primary font-medium px-4 py-2 leading-[1.375rem] cursor-pointer hover:bg-common-grey active:text-dark-blue active:border-r-2 active:border-dark-blue'
                  onClick={() => handleMenuClick("explore")}
                  >
                  <span className='mr-4'>
                    <ExploreSvg></ExploreSvg>
                  </span>
                  <span className=''>Explore</span>
                </a>
              </div>
              {/* Socials media icons 
              <div></div>
            </div>
          </div>
        </div> */}
        <DesktopMenu></DesktopMenu>
        <div className='relative col-span-7 pt-5 pb-24'>
          {/* Banner 1 and 2 */}
          <div></div>
          <a></a>
          {/* main content */}
          <div className='border border-grey bg-white rounded-lg h-[200vh]'>
            <div className='relative z-20 flex justify-between items-center border-b border-grey px-5 pt-3 font-medium text-light-grey'>
              <div className='flex items-center overflow-x-auto max-w-full' style={{ overflow: "initial" }}>
                <a
                  className={`relative font-primary flex items-center flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey ${personalized ? 'text-dark-blue border-b-2 border-dark-blue font-semibold' : ' font-medium'}`}
                  onClick={() => handleTabClick('personalized')}>
                  {/* <object data="personalizedsvg.svg" type="image/svg+xml" ></object> */}

                  <Image src={personalisedsvg} className='mr-2' alt="svg"></Image>
                  <span className='whitespace-nowrap'>Personalized</span>
                </a>
                <a
                  className={`relative font-primary flex items-center  flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey ${following ? 'text-dark-blue border-b-2 border-dark-blue font-semibold' : ' text-text-light-grey font-medium'}`}
                  onClick={() => handleTabClick('following')}>
                  <Image src={followingsvg} className='mr-2' alt="svg"></Image>
                  <span className='whitespace-nowrap'>Following</span>
                </a>
                <a
                  className={`relative font-primary flex items-center  flex-nowrap  py-3 px-2 mr-2 cursor-pointer rounded-tl-lg rounded-tr-lg hover:bg-common-grey ${featured ? 'text-dark-blue border-b-2 border-dark-blue font-semibold' : ' text-text-light-grey font-medium'}`}
                  onClick={() => handleTabClick('featured')}>
                  <Image src={featuredsvg} className='mr-2' alt="svg"></Image>
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
        <div className='hidden col-span-3 lg:block'></div>
      </main>

    </div>


  )
}
