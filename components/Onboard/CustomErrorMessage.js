import React from 'react'

const CustomErrorMessage = ({errorText}) => {
    return (
        <div className='my-2 mx-1'>
        <span className="font-primary text-red-500 text-sm ">
        {errorText}
        </span>
        </div>
    )
}

export default CustomErrorMessage