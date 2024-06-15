import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl flex-col lg:flex-row">
                    <div className='flex items-center lg:pb-0 pb-4'>
                        <Link to='/' class="flex items-center pr-4">
                            <img src='Assets/logo.png' class="mr-3 h-6 sm:h-9 w-full" alt="Logo" />
                        </Link>
                        <div className="flex md:order-2">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
                            </button>
                        </div>
                        <div class={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:w-auto lg:order-1 w-full lg:justify-between items-center ms-4 justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 text-sm font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to='/' class="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:bg-gray-50 rounded-full px-4 py-2 " aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:bg-gray-50 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <Link to='/Creators' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:bg-gray-50 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Explore creators
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-full px-4 py-2 lg:hover:text-primary-700 lg:p-0 ">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center lg:flex-row flex-col">
                        <div class="relative pb-4 lg:pb-0">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full px-3 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search creators" required />
                        </div>
                        <div>
                            <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign in</a>
                            <a href="#" class="text-white bg-[#9B62E0] hover:bg-[#8F50DB] focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>
            <hr className=''></hr>
        </header>
    )
}

export default Header