import React from 'react'
import Image from 'next/image'
import HandLikeSvg from '../public/svg/HandLikeSvg'
import CommentSvg from '../public/svg/CommentSvg'

const TrendingPost = (props) => {
    
    const post = props.post
    return (
        <div className='flex items-start'>
            <div className='mr-3'>
                <div className='w-10 h-10 overflow-hidden rounded-full '>
                    <Image src={post.postImage} alt="profileImage" width={40} height={40} className="rounded-full cursor-pointer"></Image>
                </div>
            </div>
            <div className='flex-1'>
                {/* <button className='text-base leading-[1.625rem] font-medium '></button> */}
                <h3 className='font-head_primary font-bold text-base leading-[1.375rem] mb-1'>{post.postName}</h3>
                <p className='mb-2 text-light-grey font-primary'>{post.postAccount}</p>
                <div className='flex flex-wrap items-center'>
                    <a className='flex items-center text-sm font-medium text-light-grey mr-4'>
                        <span className='mr-2'>
                            <HandLikeSvg></HandLikeSvg>
                        </span>
                        <span>{post.likes}</span>
                    </a>
                    <a className='flex items-center text-sm font-medium text-light-grey mr-4'>
                        <span className='mr-2'>
                            <CommentSvg></CommentSvg>
                        </span>
                        <span>{post.comments}</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default TrendingPost