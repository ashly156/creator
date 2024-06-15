import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    return (
        <>
            <div className='mx-auto w-full max-w-screen-xl'>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
                    <div className='text-left ml-8'>
                        <h2 className='text-base lg:text-6xl font-semibold mb-4'>
                            Express yourself <br></br>
                            freely
                        </h2>
                        <p className='text-lg mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt ut labore et <br></br>dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex<br></br> ea commodo consequat.
                        </p>
                        <a className='text-lg text-[#9B62E0]'> Learn more
                            <FontAwesomeIcon className='ml-2 text-lg' icon={faArrowRight} /></a>
                    </div>
                    <div className='w-full lg:w-[455px]'>
                        <img src='Assets/Content-1.png' class="w-full me-3" alt=" Banner" />
                    </div>

                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 items-center">
                    <div className='w-full h-[300px] lg:h-full lg:w-[455px] flex justify-center'>
                        <img src='Assets/Content-2.png' class="me-3" alt=" Banner" />
                    </div>
                    <div className='text-left ml-8'>
                        <h2 className='text-base lg:text-6xl font-semibold mb-4'>
                            Create and
                            Share
                        </h2>
                        <p className='text-lg mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt ut labore et <br></br>dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex<br></br> ea commodo consequat.
                        </p>
                        <a className='text-lg text-[#9B62E0]'> Learn more
                            <FontAwesomeIcon className='ml-2 text-lg' icon={faArrowRight} /></a>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 items-center">
                    <div className='text-left ml-8'>
                        <h2 className='text-base lg:text-6xl font-semibold mb-4'>
                            Share live
                            location
                        </h2>
                        <p className='text-lg mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt ut labore et <br></br>dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex<br></br> ea commodo consequat.
                        </p>
                        <a className='text-lg text-[#9B62E0]'> Learn more
                            <FontAwesomeIcon className='ml-2 text-lg' icon={faArrowRight} /></a>
                    </div>
                    <div className='w-full lg:w-[455px]'>
                        <img src='Assets/Content-3.png' class="w-full me-3" alt=" Banner" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content