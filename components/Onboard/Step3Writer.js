import React, { useState } from 'react'
import Button from '../Button'


const Step3Writer = ({ step, steps, onStepChange }) => {

  const [radioOptions, setRadioOptions] = useState("")

  const handleRadioChange = (e) => {
    setRadioOptions(e.target.value)
  }

  const handleStepsState = () => {
    const updatedSteps = {
      Step1: false,
      Step2: true,
      Step3: false,
      Step4: false,
      Step5: false
    }
    onStepChange(updatedSteps)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(radioOptions)
    const updatedSteps = {
      Step1: false,
      Step2: false,
      Step3: false,
      Step4: true,
      Step5: false
    }
    onStepChange(updatedSteps)
  }

  return (
    <>
      <section className='mt-14'>
        <div>
          <h1 className='mb-2 font-head_primary text-2xl font-extrabold text-text-black'>What kind of writer are you?</h1>
          <p className='text-text-light-grey font-primary text-base mb-14'>This will help us personalize your experience to reach your goals.</p>
        </div>
      </section>
      <form onSubmit={handleSubmit}>

        <div className='grid mt-2 grid-cols-2 gap-2'>
          <div className='grid col-span-8 md:col-span-1'>
            <label>
              <input type="radio" name="writerType" onChange={handleRadioChange} className='sr-only peer focus:outline-none ring-0'></input>
              <div className='bg-white border border-common-grey rounded-full cursor-pointer peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }}>
                <p className='font-primary text-base leading-6 py-4 px-6'>I&apos;m new to blogging</p>
              </div>
            </label>
          </div>
          <div className='grid col-span-8 md:col-span-1'>
            <label>
              <input type="radio" name="writerType" onChange={handleRadioChange} className='sr-only peer focus:outline-none ring-0'></input>
              <div className='bg-white border border-common-grey rounded-full cursor-pointer peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }}>
                <p className='font-primary text-base leading-6 py-4 px-6'>I write casually</p>
              </div>
            </label>
          </div>
          <div className='grid col-span-8 md:col-span-1'>
            <label>
              <input type="radio" name="writerType" onChange={handleRadioChange} className='sr-only peer focus:outline-none ring-0'></input>
              <div className='bg-white border border-common-grey rounded-full cursor-pointer peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }}>
                <p className='font-primary text-base leading-6 py-4 px-6'>I am a professional writer</p>
              </div>
            </label>
          </div>
        </div>

        <div className='mt-8 py-4'>
          <div className='flex justify-between items-center'>
            <div className='w-[34%] md:w-[150px]'>
              <Button type="button" onClick={handleStepsState} intent="tertiary" size="small" roundness="pill" fontWeight="xl" responsiveClasses="w-full">Back</Button>
            </div>
            <div className='w-[34%] md:w-[150px]'>
              <Button type="submmit" size="small" roundness="pill" fontWeight="xl" responsiveClasses="w-full">Next</Button>
            </div>
          </div>
        </div>
      </form>


    </>
  )
}

export default Step3Writer