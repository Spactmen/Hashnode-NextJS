import React from 'react'
import { cva } from 'class-variance-authority'


const TabButtonVarainats = cva(
    "w-max relative font-primary flex items-center flex-nowrap cursor-pointer rounded-tl-lg rounded-tr-lg  hover:bg-common-grey ",
    {
        variants:{
            intent:{
                primary : "py-3 px-2",
                secondary: "py-2 px-[0.375rem]",
                tertiary : 'p-2',
                large : "px-4 py-3"

            },
            margin:{
                small: "mr-1",
                big:"mr-4"
            }

        },
        defaultVariants:{
            intent:"primary",
        }

    }
)

const TabButton = ({intent,fontWeight ,margin, href, children ,value,conditionValue ,onClickFunction, activeClass,nonActiveClass}) => {

    const classes = TabButtonVarainats({intent,fontWeight,margin})

  return (
    <a href={href} className={`${classes} ${value === conditionValue ? activeClass : nonActiveClass}`} onClick={() => onClickFunction(conditionValue)}>{children}</a>
  )
}

export default TabButton