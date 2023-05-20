import React, { useState } from 'react'
import Image from 'next/image'
import SearchSvg from '../../public/svg/SearchSvg'
import TickMarkSvg from '../../public/svg/TickMarkSvg'
import PlusSvg from '../../public/svg/PlusSvg'


import programming from '../../public/programming.jpeg'
import Js from '../../public/js.jpeg'
import Aws from '../../public/Aws.jpeg'
import Css from '../../public/Css.jpeg'
import Github from '../../public/Github.jpeg'
import Java from '../../public/Java.jpeg'
import Nodejs from '../../public/Nodejs.jpeg'
import Python from '../../public/Python.jpeg'
import Reactjs from '../../public/Reactjs.jpeg'
import php from '../../public/Php.jpeg'


const Tags = () => {
    const data = [
        {
            image: programming,
            name: 'General Programming'
        },
        {
            image: Js,
            name: 'JavaScript'
        },
        {
            image: Reactjs,
            name: 'React'
        },
        {
            image: Nodejs,
            name: 'Node.js'
        },
        {
            image: Python,
            name: 'Python'
        },
        {
            image: Css,
            name: 'CSS'
        },
        {
            image: Github,
            name: 'GitHub'
        },
        {
            image: Aws,
            name: 'AWS'
        },
        {
            image: Java,
            name: 'Java'
        },
        {
            image: php,
            name: 'PHP'
        },
    ]

    const [filteredData, setFilteredData] = useState(data)
    const [isChecked, setIsChecked] = useState(Array(data.length).fill(false));


    const handleCheckboxChange = (index) => {
        setIsChecked((prevChecked) => {
            const newChecked = [...prevChecked];
            newChecked[index] = !prevChecked[index];
            return newChecked;
        });
    }

    const handleTagFilter = (e) => {
        const value = e.target.value.toLowerCase()
        setFilteredData(data.filter((item) => item.name.toLowerCase().includes(value)))
    }

    const [isSubscribed, setIssubscribed] = useState(true)

    const handleSubscribeChange = () => {
        setIssubscribed(!isSubscribed)
    }
    return (
        <>
            <section className='mt-14 mb-6'>
                <div>
                    <h1 className='mb-2 font-head_primary text-2xl font-extrabold text-text-black'>Choose your tags</h1>
                    <p className='text-text-light-grey font-primary text-base mb-14'>We use tags to personalize your feed and make it easier for you to discover relevant content..</p>
                </div>
            </section>

            <div className='mt-6 flex'>
                <div className='relative block w-full'>
                    <div className='h-full absolute top-0 left-0 flex items-center justify-center px-4'>
                        <SearchSvg></SearchSvg>
                    </div>
                    <input type="text" name="tagsfilter" onChange={handleTagFilter} placeholder='Search tags'
                        className='w-full border bg-transparent font-primary text-base leading-6  placeholder:text-input-grey rounded-full focus:outline-0 border-grey px-10 py-[0.875rem]'></input>
                </div>
            </div>

            <section className='h-44'>
                <div className='max-h-44 mt-4 flex flex-wrap' >
                    {filteredData.map((dataItem, index) => {
                        // const isChecked = checkedItems[index];
                        return (
                            <label key={index} htmlFor={`tag-${index}`} className={`flex items-center justify-start font-primary cursor-pointer text-sm rounded-full mx-2 my-2 ml-0 px-1 py-1 whitespace-nowrap break-words border md:text-base md:leading-6  ${isChecked[index] ? 'border-green bg-light-green' : ' border-grey bg-transparent'}`}>
                                <div>
                                    <Image src={dataItem.image} alt="programming" width={28} height={28} className='rounded-full'></Image>
                                </div>
                                <input type="checkbox" name="tag" id={`tag-${index}`} checked={isChecked[index]} value={dataItem.name} onChange={() => handleCheckboxChange(index)} className='sr-only peer'></input>
                                <span className='ml-2'>{dataItem.name}</span>
                                <div className='w-6 h-6 flex items-center justify-center ml-2'>
                                    {isChecked[index] ? <TickMarkSvg /> : <PlusSvg />}
                                </div>
                            </label>
                        )
                    })}
                </div>
            </section>


            <section>
                <div className='text-sm text-text-black  mt-5 mb-3 px-1'>
                    <label htmlFor='subscribe' className='flex items-center justify-start text-sm md:text-base leading-6'>
                        <input type="checkbox" name="subscribe" id="subscribe" checked={isSubscribed} onChange={handleSubscribeChange}
                            className='w-3 h-3 md:w-[0.875rem] md:h-[0.875rem] focus:ring-0 rounded-sm'
                        ></input>
                        <span className='ml-2'>
                            <span className='font-bold font-primary'>Subscribe to Personalized Newsletter</span>
                        </span>
                    </label>
                    <p className='text-light-grey ml-5 font-primary'> We will send a weekly digest of top articles to your inbox, based on your tags selection</p>
                </div>
            </section>
        </>
    )
}

export default Tags