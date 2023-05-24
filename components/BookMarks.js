import React from 'react'

const BookMarks = () => {
    return (
        <>
            <div className='mb-5 p-5  rounded-lg bg-white border border-grey'>
                <div className='flex items-center  mb-5'>
                    <div className='flex-1'>
                        <h2 className='font-head_primary font-extrabold text-base leading-[1.5rem] text-text-grey mb-1 xl:text-xl'>Bookmarks</h2>
                    </div>
                    <div className='flex items-center justify-end shrink-0'>
                        <a href='/explore' className='flex items-center font-primary font-base leading-[1.625rem] font-medium text-text-grey px-3 py-1 rounded-full border border-grey bg-white hover:bg-common-grey'>See all</a>
                    </div>
                </div>


                {/* {content} */}
                <div>
                    <p className='flex justify-center font-primary text-dark-grey leading-6 my-4'>Nothing here yet 👋</p>
                </div>

            </div>
        </>

    )
}

export default BookMarks