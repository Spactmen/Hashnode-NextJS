import React, { useState } from 'react'
import { useFormik } from 'formik';
import { step3schema } from "../../schemas/step3schema"
import Button from '../Button';
import CustomErrorMessage from './CustomErrorMessage';

const Step3Reader = ({ step, steps, onStepChange }) => {

  const [checkboxValues, setCheckboxValues] = useState([])

  const formik = useFormik({
    initialValues: {
      checkboxes: {
        gainDepth: false,
        learnSomethingNew: false,
        exploreAnswers: false,
        findInspiration: false,
        exploreHashnode: false,
      },
    },
    validationSchema: step3schema,
    onSubmit: (values) => {
      if (
        !values.checkboxes.gainDepth &&
        !values.checkboxes.learnSomethingNew &&
        !values.checkboxes.exploreAnswers &&
        !values.checkboxes.findInspiration &&
        !values.checkboxes.exploreHashnode
      ) {
        formik.setErrors({
          checkboxes: 'Please select at least one goal to proceed.',
        });
      } else {
        setCheckboxValues(values.checkboxes)
        const updatedSteps = {
          Step1: false,
          Step2: false,
          Step3: step === "Step3" ? false : true,
          Step4: true,
          Step5: false
        }
        onStepChange(updatedSteps)
      }
    },
  })

  const handleStepsState = () => {
    const updatedSteps = {
      Step1:false,
      Step2:true,
      Step3:false,
      Step4:false,
      Step5:false
    }
    onStepChange(updatedSteps)
  }
  
  return (
    <>
      <form className='mt-14' onSubmit={formik.handleSubmit}>
        <div>
          <h1 className='font-head_primary text-2xl font-extrabold text-text-black mb-2'>Select all that applies to you</h1>
          <p className='font-primary mb-14 text-text-light-grey'>This will help us personalize your experience to reach your goals. I am here…</p>
        </div>
        <div className='grid mt-6 grid-cols-2 gap-6'>
          <div className='grid col-span-8 md:col-span-1'>
            <label className="cursor-pointer outline-none focus:outline-none">
              <input
                type="checkbox"
                name="checkboxes.gainDepth"
                // name='checkboxes[0]'
                className="sr-only peer focus:outline-none ring-0"
                checked={formik.values.checkboxes.gainDepth}
                onChange={formik.handleChange}
              />
              <div className='border border-common-grey rounded-full peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }} >
                <p className='text-sm font-primary py-2 px-4 md:py-3 md:pl-7 md:text-base md:leading-6'>to gain depth</p>
              </div>
            </label>
          </div>

          <div className='grid col-span-8 md:col-span-1'>
            <label className="cursor-pointer outline-none focus:outline-none">
              <input
                type="checkbox"
                name="checkboxes.learnSomethingNew"
                // name='checkboxes[1]'
                className="sr-only peer focus:outline-none ring-0"
                checked={formik.values.checkboxes.learnSomethingNew}
                onChange={formik.handleChange}
              />
              <div className='border border-common-grey rounded-full peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }} >
                <p className='text-sm font-primary py-2 px-4 md:py-3 md:pl-7 md:text-base md:leading-6'>to learn something new</p>
              </div>
            </label>
          </div>

          <div className='grid col-span-8 md:col-span-1'>
            <label className="cursor-pointer outline-none focus:outline-none">
              <input
                type="checkbox"
                name="checkboxes.exploreAnswers"
                // name='checkboxes[2]'
                className="sr-only peer focus:outline-none ring-0"
                checked={formik.values.checkboxes.exploreAnswers}
                onChange={formik.handleChange}
              />
              <div className='border border-common-grey rounded-full peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }} >
                <p className='text-sm font-primary py-2 px-4 md:py-3 md:pl-7 md:text-base md:leading-6'>to explore answers</p>
              </div>
            </label>
          </div>

          <div className='grid col-span-8 md:col-span-1'>
            <label className="cursor-pointer outline-none focus:outline-none">
              <input
                type="checkbox"
                name="checkboxes.findInspiration"
                // name='checkboxes[3]'
                className="sr-only peer focus:outline-none ring-0"
                checked={formik.values.checkboxes.findInspiration}
                onChange={formik.handleChange}
              />
              <div className='border border-common-grey rounded-full peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }} >
                <p className='text-sm font-primary py-2 px-4 md:py-3 md:pl-7 md:text-base md:leading-6'>to find inspiration to build</p>
              </div>
            </label>
          </div>

          <div className='grid col-span-8 md:col-span-1'>
            <label className="cursor-pointer outline-none focus:outline-none">
              <input
                type="checkbox"
                name='checkboxes.exploreHashnode'
                // name='checkboxes[4]'
                className="sr-only peer focus:outline-none ring-0"
                checked={formik.values.checkboxes.exploreHashnode}
                onChange={formik.handleChange}
              />
              <div className='border border-common-grey rounded-full peer-checked:border-green peer-checked:bg-light-green peer-checked:focus:outline-none' style={{ boxShadow: 'none' }} >
                <p className='text-sm font-primary py-2 px-4 md:py-3 md:pl-7 md:text-base md:leading-6'>to explore Hashnode</p>
              </div>
            </label>
          </div>
        </div>
        {formik.errors.checkboxes && (
          <CustomErrorMessage errorText={formik.errors.checkboxes}></CustomErrorMessage>
          // <div className="error">{formik.errors.checkboxes}</div>
        )}
        <div className='mt-8 py-4'>
          <div className='flex justify-between items-center'>
            <div className='w-[34%] md:w-[150px]'>
              <Button type="button" onClick={handleStepsState} intent="secondary" size="small" roundness="pill" fontWeight="xl" responsiveClasses="">Back</Button>
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

export default Step3Reader