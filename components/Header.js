import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import LogoSvg from '../public/svg/LogoSvg'
import UpdateSvg from '../public/svg/UpdateSvg'
// import hamburgermenu from '../public/hamburgermenu.svg'
import HamburgerMenuSvg from '../public/svg/HamburgerMenuSvg'
import DarkModeSvg from "../public/svg/DarkModeSvg"
import WriteSvg1 from "../public/svg/WriteSvg1"
import WriteSvg2 from "../public/svg/WriteSvg2"
import SearchSvg from "../public/svg/SearchSvg"
import NotificationSvg from "../public/svg/NotificationSvg"
import FeedSvg from "../public/svg/FeedSvg"
import RixSvg from "../public/svg/RixSvg"
import ExploreSvg from '../public/svg/ExploreSvg'
import DraftsSvg from '../public/svg/DraftsSvg'
import BookmarksSvg from '../public/svg/BookmarksSvg'
import HackathonSvg from '../public/svg/HackathonSvg'
import TeamBlogSvg from '../public/svg/TeamBlogSvg'
import DoubleArrow from '../public/svg/DoubleArrow'
import DoubleTickSvg from '../public/svg/DoubleTickSvg'

import LinkedinSvg from '../public/svg/LinkedinSvg'
import InstagramSvg from '../public/svg/InstagramSvg'
import TwitterSvg from '../public/svg/TwitterSvg'
import DiscordSvg from '../public/svg/DiscordSvg'
import LikeSvg from '../public/svg/LikeSvg'
import CommentSvg from '../public/svg/CommentSvg'
import ArticlesSvg from '../public/svg/ArticlesSvg'
import MentionsSvg from '../public/svg/MentionsSvg'
import TwitterBlueSvg from '../public/svg/TwitterBlueSvg'
import LinkedInBlueSvg from '../public/svg/LinkedInBlueSvg'

import TabButton from './TabButton'
// import logosvg from '../public/logosvg.svg'

import profilemain from '../public/profilemain.jpeg'

import dropdown2svg from '../public/dropdown2.svg'

const Header = ({ showMobileMenu, setShowMobileMenu }) => {



    const [isFeedActive, setIsFeedActive] = useState(false)

    // const [showMobileMenu, setShowMobileMenu] = useState(false)

    const [showNotifiactions, setShowNotifications] = useState(false)

    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const headerRef = useRef()
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setShowMobileMenu(false)
            }
        })
        return (
            document.removeEventListener("mousedown", (event) => {
                if (headerRef.current && !headerRef.current.contains(event.target)) {
                    setShowMobileMenu(false)
                }
            })
        )
    }, [headerRef, showMobileMenu])

    const handleNotifications = () => {
        setShowNotifications(!showNotifiactions)
    }
    const tabs = [
        { label: <span>All notifications</span>, content: <AllNotifications></AllNotifications> },
        { label: <><span className='mr-2'><CommentSvg></CommentSvg></span><span>Comments</span></>, content: <NotificationComments></NotificationComments> },
        { label: <><span className='mr-2'><LikeSvg></LikeSvg></span><span>Likes</span></>, content: <NotificationLikes></NotificationLikes> },
        { label: <><span className='mr-2'><MentionsSvg></MentionsSvg></span><span>Mentions</span></>, content: <NotificationMentions></NotificationMentions> },
        { label: <><span className='mr-2 '><ArticlesSvg></ArticlesSvg></span><span>Articles</span></>, content: <NotificationArticles></NotificationArticles> },
    ];

    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }


    return (
        <header className='relative z-50 bg-white'>
            {/* To Open Hamburger menu */}
            {showMobileMenu &&
                (<div className='flex'>
                    <div ref={headerRef} className='fixed top-0 left-0 z-50 flex flex-col h-screen w-72 p-6 overflow-auto bg-white'>
                        <div className='mb-5'>
                            <a className='block w-36 md:w-44'>
                                <LogoSvg></LogoSvg>
                            </a>
                        </div>
                        <div className='relative z-50  flex flex-1 flex-col justify-between  py-4'>
                            <div className='flex-1 break-normal overflow-wrap-anywhere'>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><FeedSvg width={true}></FeedSvg></span>
                                    <span>My Feed</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><RixSvg width={true}></RixSvg></span>
                                    <span>Rix</span>
                                </a>
                                <a href="/explore" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><ExploreSvg width={true}></ExploreSvg></span>
                                    <span>Explore</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><DraftsSvg width={true}></DraftsSvg></span>
                                    <span>Drafts</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><BookmarksSvg width={true}></BookmarksSvg></span>
                                    <span>Bookmarks</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><HackathonSvg width={true}></HackathonSvg></span>
                                    <span>Hackathon</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><SearchSvg width={true}></SearchSvg></span>
                                    <span>Search</span>
                                </a>
                                <a href="/" className={`flex items-center rounded-lg font-primary p-2 ${isFeedActive ? "text-dark-blue font-semibold" : "font-medium "} `}>
                                    <span className='mr-4 '><DoubleArrow width={true}></DoubleArrow></span>
                                    <span>More</span>
                                </a>

                            </div>
                            <div className='flex flex-col items-start text-sm font-medium'>
                                <div className='mb-5 flex items-center'>
                                    <a href='https://twitter.com' className='block rounded-[0.25rem] p-2 text-[rgb(29,161,242)] hover:bg-[rgb(29,161,242)] hover:text-white'><TwitterSvg></TwitterSvg></a>
                                    <a href='https://twitter.com' className='block rounded-[0.25rem] p-2 text-[#0077B5] hover:bg-[#0077B5] hover:text-white'><LinkedinSvg></LinkedinSvg></a>
                                    <a href='https://twitter.com' className='block rounded-[0.25rem] p-2 text-[rgb(225,48,108)] hover:bg-[rgb(225,48,108)] hover:text-white'><InstagramSvg></InstagramSvg></a>
                                    <a href='https://twitter.com' className='block rounded-[0.25rem] p-2 text-[#7289DA] hover:bg-[#7289DA] hover:text-white'><DiscordSvg></DiscordSvg></a>
                                </div>
                                <p className='px-2 text-sm font-primary text-text-light-grey'> © 2023 Hashnode </p>
                            </div>
                        </div>
                    </div>
                    <div className="fixed top-0 right-0 w-[calc(100%-18rem)] h-screen z-40 bg-[rgba(0,0,0,0.4)]">
                    </div>
                </div>)
            }
            {/* Normal Desktop Menu */}
            <div className={`flex w-full relative z-20 py-4 border-b border-grey`}>
                <div className='w-full grid grid-cols-12 gap-4 px-4 mx-auto lg:max-w-full lg:px-6 xl:max-w-full xl:px-8 xxl:max-w-screen-xxl xxl:px-4'>
                    <div className='col-span-4 flex items-center justify-start lg:col-span-2 xl:col-span-2'>
                        <button className='px-2 py-1 font-medium mr-2 lg:hidden' onClick={handleMobileMenu} >
                            <HamburgerMenuSvg></HamburgerMenuSvg>
                        </button>
                        <span>
                            <a href='/' className='w-36 md:w-44 lg:w-full xl:w-44 xl:pr-2 flex' >
                                <LogoSvg></LogoSvg>
                            </a>
                        </span>
                    </div>
                    <div className='hidden relative z-10 lg:flex lg:col-span-6 xl:col-span-7'>
                        <a href="/?source=my_feed_open" className='flex items-center justify-center px-4 mr-2 border font-head_primary font-bold border-grey-2 text-dark-blue rounded-full hover:bg-common-grey'>My Feed</a>
                        <div className='relative'>
                            <a className='h-full font-head_primary flex items-center justify-center px-4 rounded-full font-bold hover:bg-common-grey'>
                                <span>Rix</span>
                                <span className='text-xs uppercase font-head_primary text-white text-transparent bg-gradient-to-br  from-dark-blue to-violet  ml-2 px-1 pt-[1px] rounded-lg '>new</span>
                            </a>
                        </div>
                        <form className='flex-1 relative flex items-stretch col-span-5'>
                            <span className='absolute z-30 h-full flex items-center p-4 pl-6 text-light-grey'>
                                <SearchSvg></SearchSvg>
                            </span>
                            <input type='text' placeholder='Search Hashnode' className='relative z-20 w-full rounded-full font-primary text-light-grey border  border-transparent py-2 pl-12 focus:outline-none'></input>

                        </form>
                    </div>
                    <div className='col-span-8 flex items-center justify-end lg:col-span-4 lg:justify-between xl:col-span-3'>
                        {/* Writte div */}
                        <div className='relative hidden md:block '>
                            <div className='flex rounded-full bg-dark-blue text-white '>
                                <a className='relative flex items-center rounded-tl-full rounded-bl-full bg-dark-blue p-[0.625rem] text-sm font-medium tracking-wide'>
                                    <span className='mr-2'>
                                        <WriteSvg1></WriteSvg1>
                                    </span>
                                    <span>Write</span>
                                </a>
                                <div className='w-0 border-l border-[rgb(255,255,255)] border-opacity-25 my-2'></div>
                                <button className='rounded-tr-full rounded-br-full bg-dark-blue px-1 py-2 pr-[0.45rem]'>
                                    <WriteSvg2></WriteSvg2>
                                </button>
                            </div>
                            {/* write div extra */}
                            <div></div>
                        </div>
                        <div className='flex items-center flex-end'>
                            {/* update */}
                            <div className='relative hidden w-10 h-10 md:flex md:items-center md:justify-center hover:bg-common-grey rounded-full'>
                                <button className='flex items-center justify-center rounded-full text-light-grey hover:bg-common-grey'>
                                    <UpdateSvg></UpdateSvg>
                                </button>
                            </div>
                            {/* dark mode */}
                            <button className='relative flex w-10 h-10 items-center justify-center rounded-full hover:bg-common-grey '>
                                <DarkModeSvg></DarkModeSvg>
                            </button>
                            {/*  Notifications*/}
                            <div className={`relative hidden w-10 h-10 mr-4 md:flex md:items-center md:justify-center hover:bg-common-grey rounded-full  ${showNotifiactions && "bg-common-grey"}`}>
                                <button className='relative flex items-center justify-center rounded-full text-text-grey hover:bg-common-grey'
                                    onClick={handleNotifications}
                                >
                                    <NotificationSvg></NotificationSvg>
                                </button>
                                {/*  Notifications extra*/}
                                {showNotifiactions && (<div className='absolute top-[57px] z-20 right-[0%]'>
                                    <div className='absolute 50 top-[-0.5rem] right-2 w-6 h-6 bg-white border border-grey rounded-[0.25rem] rotate-45'></div>
                                    <div className='overflow-hidden rounded-lg border border-grey  bg-white shadow-tw-shadow'>
                                        <div className='relative min-h-[2rem] min-w-[4rem] bg-white'>
                                            <div className='relative z-20 flex flex-col min-w-[39rem] max-w-[39rem] '>
                                                <div className='px-4'>
                                                    <div className='flex items-center font-primary justify-between py-6 '>
                                                        <h1 className='flex items-center font-bold  text-text-black text-2xl '>Notifications</h1>
                                                        <section className='flex'>
                                                            <button className='flex items-center justify-center font-semibold text-dark-blue px-3 py-1 text-base leading-[1.625rem]  '>
                                                                <span className='mr-2'><DoubleTickSvg></DoubleTickSvg></span>
                                                                <span>Mark all as read</span>
                                                            </button>
                                                        </section>

                                                    </div>
                                                    <div className='w-full flex border-t border-b border-grey whitespace-nowrap overflow-scroll pt-4 text-base leading-[1.375rem]'>
                                                        {tabs.map((tabItem, index) => {
                                                            return (
                                                                <TabButton intent="large" onClickFunction={handleTabClick} value={activeTab} conditionValue={index} activeClass="text-dark-blue border-b-2 border-dark-blue font-medium" nonActiveClass="text-dark-grey font-medium">{tabItem.label}</TabButton>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className='overflow-auto max-h-[calc(100vh-18rem)]'>
                                                    {tabs[activeTab].content}
                                                </div>
                                            </div>
                                            <a className='w-full inline-flex items-center justify-center text-center whitespace-nowrap border-t py-3 font-bold text-dark-blue outline-none font-primary '>See all notifications </a>

                                        </div>
                                    </div>
                                </div>)}
                            </div>

                            {/*  profile*/}
                            <div className='w-10 h-10'>
                                <button onclick={window.href="/onboard/"}>
                                    <Image src={profilemain} className='rounded-full'></Image>
                                </button>
                            </div>
                            {/*  profile extra*/}
                            <div className='hidden'></div>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header


const AllNotifications = () => {
    return (
        <div className='w-full flex items-start border border-grey px-8 py-6 text-sm'>
            <div>
                <div className='lg:text-lg'>
                    <h2 className='font-head_primary font-bold text-text-black text-[1.428em] mt-[1.6em] mb-[0.8em] leading-[1.4rem] lg:text-[1.66em] lg:mt-[1.8667em] lg:mb-[1.0667em] lg:leading-[1.33rem]'>Hi 👋, siddhi </h2>
                    <p className='mb-[1.42em] text-sm leading-6 lg:mb-6 lg:text-lg lg:leading-8 font-primary text-[rgb(17,17,17)]'>Welcome to Hashnode -- The developer community that truly believes in creative freedom.</p>
                    <p className='my-[1.142em] text-sm leading-6 lg:text-lg lg:leading-8 font-primary text-[rgb(17,17,17)] lg:my-6'>Here's some information to help you get started with Hashnode. </p>
                    <h3 className=' font-head_primary font-semibold text-[rgb(17,24,39)] text-[1.28em] mt-[1.55em] mb-[0.44em] lg:text-2xl  lg:leading-9 lg:mt-10 lg:mb-4 '>How does it work?</h3>
                    <ol className='font-primary text-[rgb(17,17,17)] list-decimal mb-4 pl-[22px] lg:text-lg lg:leading-8 lg:mb-6'>
                        <li className='my-[0.2857em] leading-6 pl-[0.428em] lg:my-[0.6667em] lg:pl-[0.444em] lg:leading-8'>Developers create personal blogs on Hashnode. These blogs live on either <strong>custom domains</strong> <code>.hashnode.dev</code>subdomains.</li>
                        <li className='my-[0.2857em] leading-6 pl-[0.428em] lg:my-[0.6667em] lg:pl-[0.444em] lg:leading-8'>Every time an author writes an article, it's published on their personal blog and distributed to the Hashnode community for discoverability.</li>
                        <li className='my-[0.2857em] leading-6 pl-[0.428em] lg:my-[0.6667em] lg:pl-[0.444em] lg:leading-8'>Users discover articles from their feeds (such as <a href="/" className='underline font-medium text-[rgb(17,17,17)]'> personal feed</a>,<a className='underline font-medium text-[rgb(17,17,17)]'>featured</a>and ,<a href='/recent'> recent</a> ), and engage with the content. </li>
                    </ol>
                    <h3 className='font-head_primary text-[rgb(17,17,17) font-semibold  text-[1.28em] leading-7 mt-[1.556em] mb-[0.44em] lg:text-[1.33em] lg:leading-9 lg:mt-[1.667em] lg:mb-[0.667em]'>Quick Links</h3>
                    <ul className=' font-primary list-disc mt-0 mb-[1.142em] pl-[1.57em]'>
                        <li className='my-[0.285em] pl-[0.428em] lg:my-[0.66em] lg:pl-[0.44em]'><a href="/" className='font-medium underline text-[rgb(17,17,17)]'>✍️ Write your first article</a></li>
                        <li className='my-[0.285em] pl-[0.428em] lg:my-[0.66em] lg:pl-[0.44em]'><a href="/" className='font-medium underline text-[rgb(17,17,17)]'>📃 Read stories from your personalized feed</a></li>
                        <li className='my-[0.285em] pl-[0.428em] lg:my-[0.66em] lg:pl-[0.44em]'><a href="/" className='font-medium underline text-[rgb(17,17,17)]'>😎 Keep your profile up-to-date</a></li>
                        <li className='my-[0.285em] pl-[0.428em] lg:my-[0.66em] lg:pl-[0.44em]'><a href="/" className='font-medium underline text-[rgb(17,17,17)]'>🚔 Code of Conduct</a></li>
                    </ul>
                    <h3 className='font-head_primary font-semibold text-[rgb(17,17,17) text-[1.28em] leading-7 mt-[1.556em] mb-[0.444em] lg:text-[1.33em] lg:mt-[1.667em] lg:mb-[0.667em] lg:leading-9'>We share the best articles on Twitter and LinkedIn. Follow us to stay updated</h3>
                </div>
                <div className='mt-5 flex items-center '>
                    <a href="https://twitter.com" className='flex items-center justify-center font-primary text-base leading-[1.625rem] font-medium text-dark-blue px-2 py-1 mr-5 rounded-full border border-dark-blue outline-none'>
                        <span className='text-[rgb(29,161,242)] mr-2'><TwitterBlueSvg></TwitterBlueSvg></span>
                        <span>Follow @Hashnode</span>
                    </a>
                    <a href="https://twitter.com" className='flex items-center justify-center font-primary text-base leading-[1.625rem] font-medium text-dark-blue px-2 py-1 mr-5 rounded-full border border-dark-blue outline-none'>
                        <span className='text-[rgb(29,161,242)] mr-2'><LinkedInBlueSvg></LinkedInBlueSvg></span>
                        <span>Follow @Hashnode</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


const NotificationComments = () => {
    return (
        <div className='min-h-[30vh] flex items-center justify-center py-20 text-dark-grey font-primary'>
            <p className='text-xl leading-[1.35rem] font-medium'> No Notifications Yet </p>
        </div>
    )
}
const NotificationLikes = () => {
    return (
        <div className='min-h-[30vh] flex items-center justify-center py-20 text-dark-grey font-primary'>
            <p className='text-xl leading-[1.35rem] font-medium'> No Notifications Yet </p>
        </div>
    )
}
const NotificationMentions = () => {
    return (
        <div className='min-h-[30vh] flex items-center justify-center py-20 text-dark-grey font-primary'>
            <p className='text-xl leading-[1.35rem] font-medium'> No Notifications Yet </p>
        </div>
    )
}
const NotificationArticles = () => {
    return (
        <div className='min-h-[30vh] flex items-center justify-center py-20 text-dark-grey font-primary'>
            <p className='text-xl leading-[1.35rem] font-medium'> No Notifications Yet </p>
        </div>
    )
}
