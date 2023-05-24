import React from 'react'

import TrendingSvg from '../public/svg/TrendingSvg'

const TrendingTags = () => {
    return (
        <div className='px-4'>
            <div>
                <hr className='my-5 border-grey'></hr>
                <h5 className='mb-5 flex items-center font-head_primary font-semibold text-dark-grey'>
                    <span>Trending tags</span>
                    <span className='ml-2'>
                        <TrendingSvg></TrendingSvg>
                    </span>
                </h5>
                <div className='flex flex-col items-start font-primary'>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>Programming Blogs</span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+129 </span>
                    </button>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>AWS</span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+130 </span>
                    </button>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>Javascript</span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+263 </span>
                    </button>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>Web Development</span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+237 </span>
                    </button>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>React </span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+167 </span>
                    </button>
                    <button className='flex justify-center items-center p-1 text-sm font-normal text-text-light-grey text-left w-full'>
                        <span className='mr-1 block flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>Devops</span>
                        <span className='border text-light-grey bg-dark-grey text-xs leading-[0.95rem] font-bold rounded-full py-1 px-2 '>+282 </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendingTags