import React from 'react'
import DesktopMenu from '../components/DesktopMenu'
import Header from '../components/Header'


const explore = () => {
    return (
        <>
            <Header></Header>
            <main className='w-full relative z-40 grid gap-4 min-w-full bg-grey sm:max-w-screen-sm md:max-w-screen-md lg:max-w-full lg:grid-cols-12 lg:px-2 xl:mx-auto xl:min-w-full xl:px-4 xxl:max-w-screen-xxl xxl:px-0 xxl:mx-auto xxl:min-w-0'>
                <DesktopMenu></DesktopMenu>
                <div className='relative col-span-7 pt-5 pb-24'>
                    <p>explore</p>
                </div>
            </main>
        </>

    )
}

export default explore