/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Navbar from "../../../components/Navbar"

// import { step1schema } from "../../../schemas/step1schema.js"
// import useUserData from '../../../store/userDataStore'

import Step1 from '../../../components/Onboard/Step1.js'
import Step2 from '../../../components/Onboard/Step2.js'
import Step3Reader from '../../../components/Onboard/Step3Reader.js'
import Step3Writer from '../../../components/Onboard/Step3Writer.js'
import Step4Writer from '../../../components/Onboard/Step4Writer.js'
import Step4Reader from '../../../components/Onboard/Step4Reader.js'
import Step5Writer from '../../../components/Onboard/Step5Writer.js'
import Step5Reader from '../../../components/Onboard/Step5Reader.js'

const index = () => {

  const [reason, setReason] = useState(null)

  const [steps, setSteps] = useState({
    Step1: true,
    Step2: false,
    Step3: false,
    Step4: false,
    Step5: false,
  })

  const stepDataReader = [
    {
      head: "Step 1",
      bio: "Create your account"
    },
    {
      head: "Step 2",
      bio: "What brings you to Hashnode ?"
    },
    {
      head: "Step 3",
      bio: "What brings you to Hashnode? (Select all that apply)"
    },
    {
      head: "Step 4",
      bio: "Choose your tags"
    },
    {
      head: "Final Step",
      bio: "We think you'll love these blogs"
    }
  ]

  const stepDataWriter = [
    {
      head: "Step 1",
      bio: "Create your account"
    },
    {
      head: "Step 2",
      bio: "What brings you to Hashnode ?"
    },
    {
      head: "Step 3",
      bio: "What kind of writer are you?"
    },
    {
      head: "Step 4",
      bio: "Where do you want your blog to be located?"
    },
    {
      head: "Final Step",
      bio: "Choose you tags"
    }
  ]


  const [stepData,setStepData] = useState(stepDataWriter)

  useEffect(() => {
    if(reason==="writer"){
      setStepData(stepDataWriter)
    }
    else{
      setStepData(stepDataReader)
    }
  },[reason])



  const onStepChange = (updatedSteps) => {
    setSteps(updatedSteps);
  };

  const getReason = (reason) => {
    setReason(reason)
  }
  // console.log(reason) 
  // console.log(steps)

  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-grey min-h-screen'>
        <div className='grid grid-cols-12 lg:max-w-screen-lg lg:mx-auto xl:max-w-screen-xl xl:mx-auto xxl:max-w-screen-xxl' >
          <div className='col-start-2 col-span-10 mt-14 md:col-span-8 md:col-start-3 xl:col-span-6 xl:col-start-4' >
            {
              Object.keys(steps).map((step, index) => {
                return (
                  steps[step] && (
                    <React.Fragment key={index}>
                      <div className='flex items-center '>
                        <h1 className='font-head_primary text-[20px] text-text-black font-extrabold leading-7 whitespace-nowrap'>{stepData[index].head}</h1> 
                         <h4 className='font-head_primary text-base font-bold text-light-grey ml-5'>{stepData[index].bio}</h4>
                      </div>
                      <div className='flex gap-6 mx-auto mt-4'>
                        {
                          Object.keys(steps).map((step, index2) => {
                            return (
                              <React.Fragment key={index2}>
                                <div className={`h-3  rounded-[5px] ${steps[step] ? 'bg-light-violet w-[30%] flex-2' : 'bg-light-cyan w-[17.5%] flex-1'}`}></div>
                              </React.Fragment>
                            )
                          })
                        }

                      </div>
                    </React.Fragment>
                  )
                )
              })
            }

            {
              Object.keys(steps).map((step, index) => {
                switch (step) {
                  case "Step1":
                    if (steps[step]) {
                      return (
                        <React.Fragment key={index}>
                          <Step1 step="Step1" steps={steps} onStepChange={onStepChange} />
                        </React.Fragment>
                      );
                    }
                  case "Step2":
                    if (steps[step]) {
                      return (
                        <React.Fragment key={index}>
                          <Step2 step="Step2" steps={steps} onStepChange={onStepChange} getReason={getReason} />
                        </React.Fragment>
                      );
                    }
                  case "Step3":
                    if (steps[step]) {
                      if (reason === "writer") {
                        return (
                          <React.Fragment key={index}>
                            <Step3Writer step="Step3" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        )
                      } else {
                        return (
                          <React.Fragment key={index}>
                            <Step3Reader step="Step3" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        );
                      }
                    }
                  case "Step4":
                    if (steps[step]) {
                      if (reason === "writer") {
                        return (
                          <React.Fragment key={index}>
                            <Step4Writer step="Step4" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        )
                      } else {
                        return (
                          <React.Fragment key={index}>
                            <Step4Reader step="Step4" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        )
                      }
                    }
                  case "Step5":
                    if (steps[step]) {
                      if (reason === "writer") {
                        return (
                          <React.Fragment key={index}>
                            <Step5Writer step="Step5" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        );
                      }
                      else {
                        return (
                          <React.Fragment key={index}>
                            <Step5Reader step="Step5" steps={steps} onStepChange={onStepChange} />
                          </React.Fragment>
                        );
                      }
                    }
                  default:
                    return null;
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default index