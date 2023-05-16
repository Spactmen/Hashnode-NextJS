import React from 'react'
import { cva } from "class-variance-authority"


const ButtonVariants = cva(
    "text-center transition-colors duration-150 cursor-pointer w-full flex justify-center gap-2",
    {
        variants: {
            /* button colors */
            intent: {
                default:   "text-white bg-blue hover:bg-light-blue",
                primary:   "bg-white hover:bg-transparent-blue text-blue border border-blue font-medium",
                secondary: "font-primary text-text-grey border border-grey  hover:bg-common-grey",
                tertiary: "bg-white font-primary text-text-grey border border-grey  hover:bg-common-grey"
            },
            /* button sizes */
            size: {
                verysmall: "text-sm font-primary leading-6 py-[0.625rem] px-4 sm:py-3 sm:text-base sm:leading-6",
                small: "text-sm font-primary leading-5 py-[0.625rem] px-10 sm:py-3 sm:text-base sm:leading-6" ,//xl:py-[10.5px]
                medium: "text-base font-primary leading-6 py-3 px-24",
                large: "text-lg font-primary leading-6  py-8 px-8",
            },
            fontWeight : {
                xl : "font-semibold",
            },

            roundness: {
                square: "rounded-none",
                round: "rounded-sm",
                pill: "rounded-full",
            },
            type:{
                submit:"submit",
                button:"button"
            },
        },
            defaultVariants: {
                intent: "default",
                size: "medium",
                roundness: "round",
                fontWeight:"xl"
            },
    },
)

const Button = ({ intent, size, roundness,fontWeight, responsiveClasses,type, children,disable,onClick }) => {
    const classes = ButtonVariants({intent,size,roundness,fontWeight})

    const handleButtonClick = () => {
        if(type === "button" && onClick){
            onClick();
        }
    }
    // console.log(className)
    return (
        <button type={type} disabled={disable} onClick={handleButtonClick} className={`${classes} ${responsiveClasses}`}>{children}</button>
    )
}

export default Button