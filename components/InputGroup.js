import React from 'react'
import { cva } from 'class-variance-authority'

const InputVariants = cva(
  'w-full placeholder:text-input-grey  rounded-full  focus:outline-opacity-50',
  {
    variants: {
      intent: {
        primary: 'py-3 px-3.5 md:py-4 md:px-4 font-primary',
        secondary: 'py-[12px] px-4  text-base font-primary', //mt-2
      },
      padding: {
        small:'py-3 px-3.5 md:py-4 md:px-4',
        medium: 'py-[12px] px-4',
        large:'px-3 py-[10px] md:p-4',
      },
      fontWeight: {
        normal: "font-normal",
        semiBold: "font-semibold"
      },
    },
    defaultVariants: {
      intent: "secondary",
      readOnly: false
    }
  }
)


const InputGroup = ({ intent, onChange, value, onBlur, fontWeight, name, id, type, placeHolder, readOnly, disabled, children, labelClass,padding }) => {

  const classes = InputVariants({ intent, fontWeight, readOnly,padding })

  let bgClass

  if (readOnly) {
    //we need to get state of the userEmail 
    value = 'siddhirocks1@gmail.com'
    bgClass = "!bg-grey !border-grey !border-2 !font-bold"
  }
  else {
    bgClass = "border-grey"
  }
  return (
    <>
      <label htmlFor={id} className={labelClass}>{children}</label>
      <input type={type} onChange={onChange} value={value} onBlur={onBlur} name={name} id={id} placeholder={placeHolder} readOnly={readOnly} disabled={disabled} className={`${classes} ${bgClass}`} />
    </>
  )
}

export default InputGroup