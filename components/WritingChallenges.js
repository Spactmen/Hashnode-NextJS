import React, { useState } from 'react'
import TabButton from './TabButton';
import Image from 'next/image';

import challengeimg1 from "../public/challengeimg1.png"
import challengeimg2 from "../public/challengeimg2.png"
import challengeimg3 from "../public/challengeimg3.png"
import challengeimg4 from "../public/challengeimg4.png"
import challengeimg5 from "../public/challengeimg5.png"
import challengeimg6 from "../public/challengeimg6.png"

const WritingChallenges = () => {


    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    const tabs = [
        { label: 'Up for grabs', content: 'Content for 1 Week' },
        { label: 'Completed', content: 'Content for 1 Month' },

    ];

    const challengePosts = [
        {
            Image: challengeimg1,
            postName: "#2Articles1Week Challenge",
            postBio: "Become better at technical writing; accept Hashnode's writing challenge for four weeks."
        },
        {
            Image: challengeimg2,
            postName: "#WomenWhoTech",
            postBio: "Share your story, achievements, or experiences as a woman, non-binary folk in tech or as a #WomenWhoTech ally!"
        },
        {
            Image: challengeimg3,
            postName: "Crazy Blogger",
            postBio: "Publish an article every day for 7 days and earn a cool crazy blogger badge!"
        },
        {
            Image: challengeimg4,
            postName: "Self Starter",
            postBio: "Publish your first article on Hashnode and become a self starter!"
        },
        {
            Image: challengeimg5,
            postName: "Talk of the town",
            postBio: "Write a story that drives amazing engagement on Hashnode and become the talk of the town!"
        },
        {
            Image: challengeimg6,
            postName: "Word Warrior",
            postBio: "Write an in-depth article on your Hashnode blog that's more than 2000 words and become a word warrior!"
        },
    ]


    return (
        <div className='mb-5 p-5  rounded-lg bg-white border border-grey'>
            <div className='flex items-center  mb-1'>
                <div className='flex-1'>
                    <h2 className='font-head_primary font-extrabold text-base leading-[1.5rem] text-text-grey mb-1 xl:text-xl'>Writing Challenges</h2>
                </div>
            </div>
            <div className='flex items-center overflow-auto whitespace-nowrap text-[14px]  leading-5 text-text-black border-b border-grey mb-4'>
                {tabs.map((tabItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            <TabButton intent="tertiary" fontWeight="normal" margin="big" onClickFunction={handleTabClick} value={activeTab} conditionValue={index} activeClass="text-dark-blue border-b-2 border-dark-blue font-bold" nonActiveClass="font-normal text-text-black">{tabItem.label}</TabButton>
                        </React.Fragment>
                    )
                })}
            </div>

            {/* {content} */}
            <div>
                {
                    challengePosts.map((post, index) => {
                        const isLastItem = index === challengePosts.length - 1;

                        return (
                            <React.Fragment key={index}>
                                <div className='flex items-start'>
                                    <div className='flex-1'>
                                        <h3 className='mb-1 font-head_primary font-bold leading-[1.375rem] text-text-grey '>
                                            <a href="https://google.com">{post.postName}</a>
                                        </h3>
                                        <a href="/">
                                            <p className='font-primary text-sm text-light-grey'>{post.postBio}</p>
                                        </a>
                                    </div>
                                    <a href="/" className='w-16 h-16 ml-5 '>
                                        <Image src={post.Image} alt="img"></Image>
                                    </a>

                                </div>
                                {!isLastItem && <hr className={`my-4 h-[1px] bg-common-grey `}></hr>}
                            </React.Fragment>

                        )
                    })
                }


            </div>

        </div>
    )
}

export default WritingChallenges