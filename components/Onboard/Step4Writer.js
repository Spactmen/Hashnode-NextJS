import React, { useState } from 'react'
import Button from '../Button'
import InputGroup from '../InputGroup'

import GlobeSvg from '../../public/svg/GlobeSvg'
const Step4Writer = ({ step, steps, onStepChange }) => {


  const [domain, setDomain] = useState(false)
  const [domainValue, setDomainValue] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isSubDomainAvailable, setIsSubDomainAvailable] = useState(null);
  const [subDomain, setSubDomain] = useState("")

  const handleDomain = () => {
    setDomain(true)
  }

  const handleDomainInputChange = (e) => {
    setDomainValue(e.target.value)
  }

  const handleSubDomainChange = (e) => {
    setSubDomain(e.target.value)
    setIsLoading(true)
    if (subDomain.length > 0) {
      setIsSubDomainAvailable(true)
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

  }

  const handleStepsState = () => {
    if (!domain) {
      const updatedSteps = {
        Step1: false,
        Step2: false,
        Step3: true,
        Step4: false,
        Step5: false
      }
      onStepChange(updatedSteps)
    } else {
      setDomain(false)
    }
  }

  // console.log(isLoading)
  // console.log(subDomain.length > 0)
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className='mt-14 mb-6'>
        {domain ? (
          <div>
            <h1 className='mb-2 font-head_primary text-2xl font-extrabold text-text-black'>Enter your domain name</h1>
            <p className='text-text-light-grey font-primary text-base mb-14'>Connect a domain to your Hashnode blog so you can retain ownership of your content while still enjoying the full benefits of our community. It&apos;s free and always will be.</p>
          </div>
        ) :
          (<div>
            <h1 className='font-head_primary text-2xl font-extrabold text-text-black'>Where do you want this blog to be located?</h1>
          </div>)}
      </section>

      <section className='p-6 border bg-white font-primary '>
        {domain ? (
            <div>
              <InputGroup
                intent="secondary"
                // value={formik.values.tagline}
                onChange={handleDomainInputChange}
                // onBlur={formik.handleBlur}
                padding="large"
                name="tagline"
                id="tagline"
                fontWeight="semiBold"
                labelClass="block font-primary text-text-light-grey text-[14.3px]"
                type="text"
                placeHolder="Enter domain name"
                readOnly={false}
                disabled={false}
              >
              </InputGroup>
              <p className='font-primary my-2 text-sm text-light-grey'>Ex: myblog.dev ( don&apos;t include http:// or https:// )</p>
            </div>

        ) :
          (
              <div>
                <div>
                  <h2 className='text-xl font-bold text-text-black tracking-tight'>Hashnode&apos;s subdomain</h2>
                  <p className='text-sm text-light-grey mt-2 md:text-base md:leading-6 '>Remember, you can always move your blog to a custom domain for free when you are ready</p>
                </div>
                <div>
                  <div className='mt-7 w-full flex'>
                    <input placeholder='Select a subdomain' onChange={handleSubDomainChange} className='px-3 py-[0.625rem] placeholder:text-input-grey w-full rounded-tl-full rounded-bl-full border-r-0 bg-white border border-grey md:p-4 focus:outline-0'></input>
                    <span className='min-w-max px-3 py-[0.625rem] text-sm text-light-grey font-semibold bg-white border border-grey border-l-0 rounded-tr-full rounded-br-full md:p-4'>.hashnode dev</span>
                  </div>
                  {!isLoading && subDomain.length == 0 && <p className='mx-1 my-2 text-sm text-light-grey'>Only lowercase alphanumeric allowed. e.g. allysa or supercoder</p>}
                  {!isLoading && subDomain.length > 0 && (<p className='my-3 mx-1 text-sm text-light-grey'>✅ Congrats! That&apos;s available.</p>)}
                  {isLoading && subDomain.length >= 1 && (<span className="text-light-grey font-primary text-sm my-2 mx-1">Checking username availability...</span>)}
                  {/* {!isLoading && isSubDomainAvailable && <p className='my-3 mx-1 text-sm text-light-grey'>✅ Congrats! That&apos;s available.</p>} */}
                </div>
                <div className='my-6'>
                  <span className='inline-block text-sm font-semibold bg-light-cyan py-2 px-6 rounded-full'> OR </span>
                </div>
                
                <div>
                  <h2 className='text-xl text-text-black font-bold tracking-tight'>Your own custom domain</h2>
                  <p className='mt-2 mb-4 text-sm text-light-grey md:text-base leading-6'>Do you already have your own domain? (You can map it for free)</p>
                </div>
                <div className='mb-5'>
                  <Button type="button" onClick={handleDomain} intent="primary" size="verysmall" roundness="pill" fontWeight="xl" responsiveClasses="w-full md:w-max"><GlobeSvg></GlobeSvg>Map my custom domain</Button>
                </div>
              </div>
          )
        }

      </section>

      <div className='sticky bottom-0 bg-grey mt-8 py-4'>
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

export default Step4Writer