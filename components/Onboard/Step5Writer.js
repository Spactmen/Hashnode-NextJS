import React, { useState } from 'react'
import { useRouter } from 'next/router';

import Button from '../Button'

import Image from 'next/image'
import Tags from './Tags'


const Step5Writer = ({ step, steps, onStepChange }) => {
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

  return (
    <form onSubmit={handleSubmit}>


      <Tags></Tags>


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

export default Step5Writer