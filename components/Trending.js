import React, { useState } from 'react'
import TabButton from './TabButton';
import TrendingPost from '../components/TrendingPost'
import pic1 from '../public/pic3.jpeg'
import trendingimg1 from "../public/trendingimg1.jpeg"
import trendingimg2 from "../public/trendingimg2.jpeg"
import trendingimg3 from "../public/trendingimg3.jpeg"
import trendingimg4 from "../public/trendingimg4.jpeg"
import trendingimg5 from "../public/trendingimg5.jpeg"
import trendingimg6 from "../public/trendingimg6.jpeg"
import Image from 'next/image';
import dropDown2Svg from "../public/dropdown2.svg"
import DropDownSvg from "../public/svg/DropDownSvg"

const Trending = () => {

  const tabs = [
    { label: '1 week', content: 'Content for 1 Week' },
    { label: '1 month', content: 'Content for 1 Month' },
    { label: '3 months', content: 'Content for 3 Months' },
    { label: '6 months', content: 'Content for 4 Months' },
  ];

  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const trendingPosts = [
    {
      postImage: trendingimg1,
      postName: "Notion AI-like Prompts to Enhance Your Writing",
      postLink: "https://google.com",
      postAccount: "Pratik Mali",
      postAccountLink: "https://googgle.com",
      likes: 286,
      comments: 48,

    },
    {
      postImage: trendingimg2,
      postName: "19 VS Code Extensions To Boost Your Productivity 🚀🔥",
      postLink: "https://google.com",
      postAccount: "Madza",
      postAccountLink: "https://googgle.com",
      likes: 85,
      comments: 8,
    },
    {
      postImage: trendingimg3,
      postName: "Learn how to create a beautiful CLI application with the oclif and @clack/prompts",
      postLink: "https://google.com",
      postAccount: "Sergii Kirianov",
      postAccountLink: "https://googgle.com",
      likes: 80,
      comments: 1,
    },
  ]

  const [AllPosts, setAllPosts] = useState(trendingPosts)
  const handleSeeMoreClick = () => {
    setAllPosts([...trendingPosts, ...trendingPosts])
  }

  return (
    <div className='mb-5 p-5  rounded-lg bg-white border border-grey'>
      <div className='flex items-center  mb-1'>
        <div className='flex-1'>
          <h2 className='font-head_primary font-extrabold text-base leading-[1.5rem] text-text-grey mb-1 xl:text-xl'>Trending</h2>
        </div>
        <div className='flex items-center justify-end shrink-0'>
          <a href='/explore' className='flex items-center font-primary font-base leading-[1.625rem] font-medium text-text-grey px-3 py-1 rounded-full border border-grey bg-white hover:bg-common-grey'>See all</a>
        </div>

      </div>
      <div className='flex items-center overflow-auto whitespace-nowrap text-[14px]  leading-5 text-light-grey border-b border-grey mb-4'>
        {tabs.map((tabItem, index) => {
          return (
            <React.Fragment key={index}>
              <TabButton intent="secondary" fontWeight="normal" margin="small" onClickFunction={handleTabClick} value={activeTab} conditionValue={index} activeClass="text-dark-blue border-b-2 border-dark-blue font-semibold" nonActiveClass="font-normal">{tabItem.label}</TabButton>
            </React.Fragment>
          )
        })}
      </div>

      {/* {content} */}
      <div>
        {AllPosts.map((post, index) => {
          return (
            <React.Fragment key={index}>
              <TrendingPost post={post}></TrendingPost>
              {AllPosts.length < 4 ? <hr className={`my-4 h-[1px] bg-common-grey ${index === 2 ? 'hidden' : ''}`}></hr>
                : <hr className={`my-4 h-[1px] bg-common-grey ${index === 5 ? 'hidden' : ''}`}></hr>}
            </React.Fragment>)
        })}
        {AllPosts.length < 4 ? <button className='inline-flex items-center justify-center  py-1 px-3 mt-4 font-bold font-primary text-dark-blue text-base leading-[1.625rem] rounded-full ' onClick={handleSeeMoreClick}>
          Show More
          <span className='ml-2'>
            <DropDownSvg></DropDownSvg>
          </span>
        </button> : null}


      </div>

    </div>
  )
}

export default Trending