import React, { useState } from 'react'
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
import php from '../../public/php.jpeg'

import Image from 'next/image'

const Step4Reader = () => {


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
      image: Nodejs,
      name: 'Node.js'
    },
    {
      image: Reactjs,
      name: 'React'
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

  // const [isChecked, setIsChecked] = useState(false)

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (e, index) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
    // setIsChecked(!isChecked)
  }

  // console.log(isChecked)
  const handleTagFilter = () => {
    
  }


  return (
    <form>
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
          {data.map((dataItem, index) => {
            const isChecked = checkedItems[index];
            return (
              <label key={index} htmlFor='tag' className={`flex items-center justify-start font-primary cursor-pointer text-sm rounded-full mx-2 my-2 ml-0 px-1 py-1 whitespace-nowrap break-words border ${isChecked ? 'border-green bg-light-green' : ' border-grey bg-transparent'}`}>
                <div>
                  <Image src={dataItem.image} alt="programming" width={28} height={28} className='rounded-full'></Image>
                </div>
                <input type="checkbox" name="tag" id="tag" checked={isChecked} value="General Programming" onChange={(e) => handleCheckboxChange(e, index)} className='sr-only peer'></input>
                <span className='ml-2'>{dataItem.name}</span>
                <div className='w-6 h-6 flex items-center justify-center ml-2'>
                  {isChecked ? <TickMarkSvg /> : <PlusSvg />}
                </div>
              </label>
            )
          })}
        </div>
      </section>
    </form>
  )
}

export default Step4Reader