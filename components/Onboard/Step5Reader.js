import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router';

import Button from '../Button'
import pic1 from "../../public/pic1.jpeg"
import pic2 from "../../public/pic2.jpeg"
import pic3 from "../../public/pic3.jpeg"
import pic4 from "../../public/pic4.jpeg"
import pic5 from "../../public/pic5.jpeg"
import pic6 from "../../public/pic6.jpeg"

import DropdownSvg from '../../public/svg/DropDownSvg'
import PlusSvg from '../../public/svg/PlusSvg'
import TickMark from '../../public/svg/TickMarkSvg'
const Step5Reader = ({ step, steps, onStepChange }) => {
  const router = useRouter();

  const handleStepsState = () => {
    const updatedSteps = {
      Step1: false,
      Step2: false,
      Step3: false,
      Step4: true,
      Step5: false
    }
    onStepChange(updatedSteps)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedSteps = {
      Step1: false,
      Step2: false,
      Step3: false,
      Step4: false,
      Step5: true
    }
    onStepChange(updatedSteps)
    router.push("/")
  }

  const data = [
    {
      image: pic1,
      name: 'apt-get ops',
      link: {
        name: 'aptgetops.tech',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '9.6k'
    },
    {
      image: pic3,
      name: 'Develop and Solve',
      link: {
        name: 'developeandsolve.hashnode.dev',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '2.4k'

    },
    {
      image: pic3,
      name: 'GreenRoots Blog - Tapas Adhikary',
      link: {
        name: 'blog.greenroots.info',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '21.9k'

    },
    {
      image: pic5,
      name: 'Magic Eden Engineering',
      link: {
        name: 'eng.magiceden.dev',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '2.7k'
    },
    {
      image: pic1,
      name: 'apt-get ops',
      link: {
        name: 'aptgetops.tech',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '9.6k'
    },
    {
      image: pic3,
      name: 'Develop and Solve',
      link: {
        name: 'developeandsolve.hashnode.dev',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '2.4k'

    },
    {
      image: pic3,
      name: 'GreenRoots Blog - Tapas Adhikary',
      link: {
        name: 'blog.greenroots.info',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '21.9k'

    },
    {
      image: pic5,
      name: 'Magic Eden Engineering',
      link: {
        name: 'eng.magiceden.dev',
        href: "https://aptgetops.tech/",
      },
      // isFollowed: false,
      followers: '2.7k'
    },
  ]

  const [fullData,setFulldata] = useState([...data])
  const handleAddData = () => {
    setFulldata([...data ,...data])
  }

  const [isFollowed, setIsFollowed] = useState(Array(data.length).fill(false))
  const handleFollowChange = (index) => {
    setIsFollowed((prevFollowed) => {
      const newFollowedData = [...prevFollowed]
      newFollowedData[index] = !prevFollowed[index]
      return newFollowedData
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className='mt-14'>
        <div>
          <h1 className='mb-2 font-head_primary text-2xl font-extrabold text-text-black'>We think you'll love these blogs</h1>
          <p className='text-text-light-grey font-primary text-base mb-14'>You can discover more blogs in the Explore tab on the homepage.</p>
        </div>
      </section>

      <div className='w-full my-2'>
        <div className='w-full flex flex-wrap'>
          {fullData.map((item, index) => {
            return (
              <div key={index} className='w-full p-2 font-primary md:w-1/2'>
                <div className='w-full h-full p-3 rounded-lg break-normal border border-grey'>
                  <div className='flex'>
                    <a>
                      <Image src={item.image} className='rounded-full' alt="profileimg"></Image>
                    </a>
                    <div className='w-full ml-2 flex justify-between'>
                      <div className='flex flex-col items-start'>
                        <h2 className='text-base leading-6 font-semibold'> {item.name} </h2>
                        <p className='text-sm text-light-grey' >{item.link.name}</p>
                        <div className='mt-2 rounded-[0.25rem] bg-[#f1f5f9] border border-grey'>
                          <span className='mx-2 text-xs leading-4 text-text-black'>{`${item.followers} followers`}</span>
                        </div>
                      </div>
                      <div className='ml-2'>
                        <button onClick={() => handleFollowChange(index)} className='text-sm flex justify-center items-center rounded-full border border-grey p-1 hover:bg-common-grey'>
                          {isFollowed[index] ? <TickMark></TickMark> : <PlusSvg></PlusSvg>}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
          }
          <button onClick={handleAddData} type='button' className='w-full text-sm text-text-grey font-semibold flex items-center justify-center my-3 py-3 bg-white'>
            Show more
            <div className='ml-2'>
              <DropdownSvg></DropdownSvg>
            </div>
          </button>
        </div>

      </div>

      <div className='mt-8 py-4'>
        <div className='flex justify-between items-center'>
          <div className='w-[34%] md:w-[150px]'>
            <Button type="button" onClick={handleStepsState} intent="secondary" size="small" roundness="pill" fontWeight="xl" responsiveClasses="">Back</Button>
          </div>
          <div className='w-[34%] md:w-[150px]'>
            <Button type="submmit" size="small" roundness="pill" fontWeight="xl" responsiveClasses="">Next</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Step5Reader