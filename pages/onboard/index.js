/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import LoginButton from '../../components/Onboard/LoginButton'
import Button from '../../components/Onboard/Button'
import InputGroup from '../../components/InputGroup'


import GoogleSvg from '../../public/svg/GoogleSvg'
import GithubSvg from '../../public/svg/GithubSvg'
import LinkedinSvg from '../../public/svg/LinkedinSvg'
import FacebookSvg from '../../public/svg/FacebookSvg'
import AppleSvg from '../../public/svg/AppleSvg'
import UploadSvg from '../../public/svg/UploadSvg'
import profile from "../../public/profile.jpeg"
import profile2 from "../../public/profile2.jpeg"


const index = () => {

  const loginOptions = [
    {
      image: <GoogleSvg className="w-4 h-4 mr-1" />,
      link: 'https://google.com',
      text: "Continue with Google"
    },
    {
      image: <GithubSvg className="w-4 h-4 mr-1" />,
      link: 'https://github.com',
      text: "Continue with GitHub"
    },
    {
      image: <LinkedinSvg className="w-4 h-4 mr-1" />,
      link: 'https://linked.com',
      text: "Continue with Linkedin"
    },
    {
      image: <FacebookSvg className="w-4 h-4 mr-1" />,
      link: 'https://facebook.com',
      text: "Continue with Facebook"
    },
    {
      image: <AppleSvg className="w-4 h-4 mr-1" />,
      link: 'https://apple.com',
      text: "Continue with Apple"
    },
  ]

  const [userEmail, setUserEmail] = useState("")

  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userEmail)
    console.log(/\S+@\S+\.\S+/.test(userEmail))
    if (!userEmail) {
      setIsEmailSent(false)
      setError('Please enter email address')
      return
    }
    else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setIsEmailSent(false)
      setError('Please enter valid email address')
      return
    }
    setIsEmailSent(true)
  }
  return (
    <>
      <Navbar></Navbar>
      <main className='bg-grey min-h-screen'>
        <div className='lg:max-w-screen-lg lg:mx-auto xl:max-w-screen-xl xl:mx-auto'>
          <div className=' px-10 py-20 md:px-20 grid lg:grid-cols-12 '>
            <div className='lg:col-span-6'>
              <div className='flex justify-center font-head_primary items-center px-4 mb-7 mt-[-8px] xl:mb-5 md:mt-0'>
                <h1 className='w-max text-3xl font-extrabold text-center leading-10'><span className='bg-gradient-to-br from-dark-blue to-violet text-transparent inline-block bg-clip-text'>Sign up / Log in</span></h1>
              </div>
              <div className='my-4 border-b-[1px] pb-3 xl:pb-5  xl:flex xl:flex-wrap xl:mt-0'>
                {loginOptions.map((loginOption, index) => {
                  return (
                    <React.Fragment key={index}>
                      <LoginButton loginOption={loginOption} />
                    </React.Fragment>
                  )
                })}
              </div>
              <div>
                {!isEmailSent ? <form className='flex flex-col mt-4' onSubmit={handleSubmit}>
                  {/* <label htmlFor='email' className='text-center font-semibold'>Or sign in using a magic link</label>
                  <input type="email" onChange={handleInputChange} name="email" id="email" placeholder='Enter your email address' className='border border-grey font-semibold placeholder:text-input-grey mt-4 py-3 px-3.5 xl:py-4 rounded-full focus: border-hidden focus:outline-opacity-50'></input> */}
                  <InputGroup
                    intent="primary"
                    onChange={handleInputChange}
                    value={userEmail}
                    fontWeight="semiBold"
                    id="email"
                    labelClass="text-center font-primary font-semibold mt-1 mb-4" 
                    type="email"
                    name="email"
                    placeHolder="Enter your email address"
                    readOnly={false}
                    disabled={false}
                    padding="small"
                  > Or sign in using a magic link </InputGroup>
                  {error && <span className='font-primary text-red-500 text-sm'>{error}</span>}
                  <div className='mt-4'>
                    <Button intent="default" size="small" roundness="pill" fontWeight="xl" responsiveClasses="w-full md:w-max md:px-20 md:py-2.5 md:mx-auto md:flex">Submit</Button>
                  </div>
                </form> :
                  <div className='bg-white p-5 border border-grey rounded-lg'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='mb-4'>
                        <UploadSvg></UploadSvg>
                      </div>
                      <p className='text-light-grey text-xl font-medium'>Check your inbox for a secure link to proceed.</p>
                      <Button intent="primary" size="small" roundness="pill" responsiveClasses="w-max mt-4">Go To Inbox</Button>
                    </div>

                  </div>
                }
              </div>
            </div>
            <div className='hidden lg:block lg:col-span-6 mt-16'>
              <div className='w-2/3 mx-auto pl-4'>
                <div>
                  <p className='italic text-text-grey text-[18.2px] leading-7 font-primary'>
                  &quot;It&apos;s amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists &quot;	
                  </p>
                </div>
                <div className='flex gap-4 mt-5 items-center'>
                  <div>
                    <Image src={profile} className='w-12 object-contain rounded-full' alt="profileimage"></Image>
                  </div>
                  <div className='leading-5 text-light-grey'>
                    <p className='font-primary font-medium text-base '>Guillermo Rauch</p>
                    <p className='font-primary mt-0.5'>CEO, Vercel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:hidden px-20 py-14 bg-[#F1F5F9]'>
            <div className='mx-auto'>
              <div>
                <p className='italic text-[16.5px] leading-6 font-semibold '>You can start a blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho.</p>
              </div>
              <div className='flex gap-3 mt-5 items-center'>
                <div>
                  <Image src={profile2} className='w-10 object-contain rounded-full' alt="profileimage"></Image>
                </div>
                <div className='leading-5 space-y-1'>
                  <p className='font-bold text-base'>Quincy Larson</p>
                  <p className='text-input-grey'>Founder, freeCodeCamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default index