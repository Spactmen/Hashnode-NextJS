import React from 'react'

const Hiring = () => {

    const opportunities = [
        {
            role: "Growth Marketer",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Marketing",
                    color: "rgb(255,237,213)"
                }
            ]
        },
        {
            role: "Fullstack Developer",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Engineering",
                    color: "rgb(219,234,254)"
                }
            ]
        },
        {
            role: "Graphic Designer",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Design",
                    color: "rgb(243,232,255)"
                }
            ]
        },
        {
            role: "Marketing Manager",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Marketing",
                    color: "rgb(255,237,213)"
                }
            ]
        },
        {
            role: "Community Manager",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Marketing",
                    color: "rgb(255,237,213)"
                }
            ]
        },
        {
            role: "SocialMedia  Manager",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Marketing",
                    color: "rgb(255,237,213)"
                }
            ]
        },
        {
            role: "Product  Manager",
            tags: [
                {
                    tag: "Remote",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Permanent",
                    color: "rgb(241,245,249)"
                },
                {
                    tag: "Product",
                    color: "rgb(252,231,243)"
                }
            ]
        },
    ]

    return (
        <div className='mb-5 p-5  rounded-lg bg-white border border-grey'>
            <div className='flex items-center  mb-5'>
                <div className='flex-1'>
                    <h2 className='font-head_primary font-extrabold text-base leading-[1.5rem] text-text-grey mb-1 xl:text-xl'>💼 Hashnode's Hiring</h2>
                </div>
                <div className='flex items-center justify-end shrink-0'>
                    <a href='/explore' className='flex items-center font-primary font-base leading-[1.625rem] font-medium text-text-grey px-3 py-1 rounded-full border border-grey bg-white hover:bg-common-grey'>See all</a>
                </div>
            </div>


            <div>
                {opportunities.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <hr className={`my-4 h-[1px] bg-common-grey`}></hr>
                            <div>
                                <a>
                                    <h3 className='mb-1 text-base font-head_primary font-bold leading-[1.375rem] text-text-grey'>{item.role}</h3>
                                    <p className='flex flex-wrap items-center text-sm font-primary font-normal  text-text-light-grey'>
                                        {item.tags.map((tagItem, index) => {
                                            return <span key={index} className={`rounded-[0.25rem] block px-1 py-[0.125rem] mr-2 `} style={{ backgroundColor: `${tagItem.color}` }}>{tagItem.tag}</span>
                                        })}
                                        {/* <span className='rounded-[0.25rem] block px-1 py-[0.125rem] mr-2 bg-[rgb(241,245,249)]'>Remote</span>
                                        <span className='rounded-[0.25rem] block px-1 py-[0.125rem] mr-2'>Permanent</span>
                                        <span className='rounded-[0.25rem] block px-1 py-[0.125rem] mr-2'>Marketing</span> */}
                                    </p>
                                </a>
                            </div>
                        </React.Fragment>
                    )
                })}


            </div>



        </div>
    )
}

export default Hiring