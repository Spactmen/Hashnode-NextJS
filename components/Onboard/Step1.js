import React, { useState } from 'react'
import { useFormik } from 'formik'
import Navbar from '../Navbar'
import Button from './Button'
import InputGroup from '../InputGroup'
import CustomErrorMessage from './CustomErrorMessage'

import Link from 'next/link'
import { step1schema } from '../../schemas/step1schema'
import useUserData from '../../store/userDataStore'

const initialValues = {
    name: "",
    username: "",
    tagline: ""
}

const Step1 = ({ step, steps, onStepChange }) => {
    const [userdata, setUserData] = useState({})
    const [relatedUsernames, setRelatedUsernames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);

    const addUserData = useUserData((state) => state.addUserData)

    const handleUsernameChange = (event) => {
        formik.handleChange(event);
        const username = event.target.value;
        if (username.length > 0) {
            checkUsernameAvailability(username);
        } else {
            setRelatedUsernames([]);
        }
    };


    const checkUsernameAvailability = async (username) => {
        setIsLoading(true);
        try {
            // const response = await fetch() get usernames availability from api
            const data = {
                available: false,
                UserNames: ['siddhu', 'vigneshwar']
            }
            if (data.available) {
                setIsUsernameAvailable(username)
            }
            else {
                setRelatedUsernames(data.UserNames);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const handleUsernameButtonClick = (username) => {
        formik.setFieldValue('username', username)
        setIsUsernameAvailable(username)
    }

    const onSubmit = (values) => {

        const updatedSteps = {
            Step1: step === "Step1" ? false : true,
            Step2: true,
            Step3:false,
            Step4:false,
            Step5:false,
        };
        onStepChange(updatedSteps);
    }

    const formik = useFormik({
        initialValues,
        validationSchema: step1schema,
        onSubmit
    })


    return (

        <><div className='flex flex-col items-center justify-center sm:items-start'>
            <div className='my-14 w-max'>
                <h1 className='text-2xl font-extrabold mb-2 font-head_primary tracking-normal box-border'>Create your account</h1>
                <p className='text-text-light-grey font-primary'>🤘 Let&apos;s git init your Hashnode journey</p>
            </div>
        </div>

            <form onSubmit={formik.handleSubmit}>
                <div className='sm:grid grid-cols-2 gap-3'>
                    <div className='flex flex-col mt-1 mb-4 md:mb-[4px]'>
                        <InputGroup
                            intent="secondary"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="name"
                            id="name"
                            fontWeight="normal"
                            labelClass="block font-semibold text-text-light-grey text-[14.3px]"
                            type="text"
                            placeHolder="Enter your name"
                            readOnly={false}
                            disabled={false}
                            padding="medium"
                        > Full Name <span className='text-input-grey'>*</span> </InputGroup>
                        {formik.errors.name && formik.touched.name ? (
                        <CustomErrorMessage errorText={formik.errors.name}></CustomErrorMessage>
                        // <span className='font-primary text-red-500 text-sm my-2 mx-1'>Enter your full name</span>
                        ) : null}
                    </div>
                    <div></div>
                    <div className='flex flex-col mt-1 mb-4 md:mb-[4px] '>
                        <InputGroup
                            intent="secondary"
                            value={formik.values.username}
                            onChange={handleUsernameChange}
                            onBlur={formik.handleBlur}
                            name="username"
                            id="username"
                            fontWeight="normal"
                            labelClass="block font-semibold text-text-light-grey text-[14.3px] font-primary"
                            type="text"
                            placeHolder="Pick a Username"
                            readOnly={false}
                            disabled={false}
                            padding="medium"
                        > Pick a username <span className='text-input-grey'>*</span> </InputGroup>
                        {formik.errors.username && formik.touched.username ? (
                            <CustomErrorMessage errorText={formik.errors.username}></CustomErrorMessage>
                            // <span className="font-primary text-red-500 text-sm my-2 mx-1">
                            //     Please enter a valid username
                            // </span>
                        ) : null}
                        {isLoading && (
                            <span className="text-light-grey font-primary text-sm my-2 mx-1">
                                Checking username availability...
                            </span>
                        )}
                        {!isLoading && relatedUsernames.length > 0 && isUsernameAvailable === null && (
                            <div className='mx-1'>
                                <p className="text-light-grey text-sm my-2">That&apos;s not available. Here are some available usernames:</p>
                                {relatedUsernames.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button onClick={() => handleUsernameButtonClick(item)} className={`text-sm font-primary text-text-light-blue ${index !== 0 ? "ml-2" : ""}`}>{item}</button>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        )}
                        {isUsernameAvailable && <p className='my-3 mx-1 text-sm text-light-grey'>✅ Congrats! That&apos;s available.</p>}
                    </div>
                    <div className='flex flex-col mt-1 mb-4 md:mb-[4px]'>
                        <InputGroup
                            intent="secondary"
                            value=""
                            name="email"
                            id="email"
                            fontWeight="normal"
                            labelClass="block font-semibold text-text-light-grey text-[14.3px]"
                            type="email"
                            placeHolder="Pick a User Name"
                            readOnly={true}
                            disabled={true}
                            padding="medium"
                        > Your email address <span className='text-input-grey'>*</span> </InputGroup>
                    </div>
                </div>
                <div className='flex flex-col mb-4 sm:mt-4'>
                    <InputGroup
                        intent="secondary"
                        value={formik.values.tagline}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="tagline"
                        id="tagline"
                        fontWeight="normal"
                        labelClass="block font-semibold text-text-light-grey text-[14.3px]"
                        type="text"
                        placeHolder="Enter your tag line..."
                        readOnly={false}
                        disabled={false}
                        padding="medium"
                    > Enter your tagline. Tell us about what you do: <span className='text-input-grey'>*</span> </InputGroup>
                </div>

                <div className='mt-10 mb-4'>
                    <p className='relative text-[14.5px] text-text-grey'>
                        <em className=''>By continuing to the next step, you agree to Hashnode&apos; <Link href="/" className='text-blue'>privacy policy</Link> and <Link href="/" className='text-blue'>terms of use</Link>.</em>
                    </p>
                </div>
                <div className='py-4 bg-grey sticky bottom-0 mt-8 md:mt-8 '>
                    <div className='flex justify-center items-center md:w-auto md:block'>
                        <Button type="submmit" size="medium" roundness="pill" fontWeight="xl" responsiveClasses="w-full md:w-auto ">Next</Button>
                    </div>
                </div>
            </form></>
    )
}

export default Step1