import React, { useState } from 'react'
import PenSvg from "../../public/svg/PenSvg"
import BookSvg from "../../public/svg/BookSvg"
import Button from '../Button'
// import ErrorMessage from './CustomErrorMessage'

const Step2 = ({ step, steps, onStepChange,getReason }) => {

  const [isWriterClicked, setIsWriterClicked] = useState(false);
  const [isReaderClicked, setIsReaderClicked] = useState(false);

  const [errorMessage,setErrorMessage] = useState(false)


  const handleWriterClick = () => {
    setIsWriterClicked(true);
    setIsReaderClicked(false);
  };

  const handleReaderClick = () => {
    setIsReaderClicked(true);
    setIsWriterClicked(false);
  };
  console.log(isWriterClicked)
  console.log(isReaderClicked)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(isWriterClicked || isReaderClicked !== false){
      if(isWriterClicked){
        getReason('writer')
      }
      else{
        getReason('reader')
      }
      const updatedSteps = {
        Step1: false,
        Step2: step === "Step2" ? false : true,
        Step3: true,
        Step4: false,
        Step5: false
      }
      onStepChange(updatedSteps)
    }else{
      return
    }
  }

  return (
    <>
      <section className='mt-14'>
        <div>
          <h1 className='mb-2 font-head_primary text-2xl font-extrabold text-text-black'>What brings you to Hashnode?</h1>
          <p className='text-text-light-grey font-primary text-base mb-14'>We will personalize your experience based on the selection.</p>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <div className='lg:max-w-screen-lg'>
          <div onClick={handleWriterClick}>
            <div className={`flex items-center py-4 px-3 my-4 rounded-md border  hover:shadow-tw-shadow hover:cursor-pointer ${isWriterClicked ?  'border-green bg-light-green' : 'border-grey bg-white'}`}>
              <div className='px-10'>
                <PenSvg></PenSvg>
              </div>
              <div className='w-3/4' >
                <h3 className='mb-1 font-head_primary text-xl font-extrabold'>I am a writer</h3>
                <p className='text-sm font-primary text-text-light-grey md:text-base md:leading-6'>I am here to start a blog and share my knowledge</p>
              </div>
            </div>
          </div>
          <div onClick={handleReaderClick}>
            <div className={`flex items-center py-4 px-3 my-4 rounded-md border hover:shadow-tw-shadow hover:cursor-pointer ${isReaderClicked ? ' border-green bg-light-green' : 'border-grey bg-white'}`}>
              <div className='px-10'>
                <BookSvg></BookSvg>
              </div>
              <div className='w-3/4' >
                <h3 className='mb-1 font-head_primary text-xl font-extrabold'>I am here to browse and read</h3>
                <p className='text-sm font-primary text-text-light-grey md:text-base md:leading-6'>I am here to read articles and be a part of the community <br></br><em> (You can always start your own blog later)</em></p>
              </div>
            </div>
          </div>
          {/* <ErrorMessage errorText="Please select atleast one option"></ErrorMessage> */}
        </div>


        <div className='mt-8 py-4'>
          <div className='flex justify-center items-center md:w-auto md:block'>
            <Button type="submmit" size="small" roundness="pill" fontWeight="xl" responsiveClasses="w-full md:w-fit">Next</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Step2