import React from 'react'

const Banner = () => {
    return (
        <div className='px-8 pt-8 text-center'>
            <h1 className='text-base lg:text-6xl font-semibold pb-8'>Stay close to your <br></br>
                <span className='text-[#9B62E0]'>favorite people.</span> </h1>
            <div>
                <form class="max-w-md mx-auto">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-8 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number" required />
                        <button type="submit" class="text-white absolute inset-y-0 right-0 bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
                    </div>
                </form>
            </div>
            <div className='px-4'>
                <img src='Assets/Banner.png' class=" me-3" alt=" Banner" />
            </div>
        </div>
    )
}

export default Banner