import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5 mb-8">
                    <div>
                        <div class="mb-6 md:mb-0">
                            <a href="" class="flex items-center">
                                <img src='Assets/logo.png' class="h-8 me-3" alt=" Logo" />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-col items-start">
                            <li class="mb-4">
                                <a href="" class="hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="" class="hover:underline">Privacy</a>
                            </li>
                            <li>
                                <a href="" class="hover:underline">Privacy & Terms</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-col items-start">
                            <li class="mb-4">
                                <a href="" class="hover:underline">Chat with us</a>
                            </li>
                            <li class="mb-4">
                                <a href="" class="hover:underline">help center</a>
                            </li>
                            <li>
                                <a href="" class="hover:underline">Feature request</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Community</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-col items-start">
                            <li class="mb-4">
                                <a href="" class="hover:underline ">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="" class="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">More</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium flex flex-col items-start">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Buttons</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Brand assests</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
                    <div></div>
                    <div className='flex flex-col items-start'>
                        <div class="mb-4 flex ">
                            <a href="" class="flex items-center ">
                                <img src='Assets/App-Store.png' class="h-8 me-8" alt=" Logo" />
                            </a>
                            <a href="" class="flex items-center">
                                <img src='Assets/Google-Play.png' class="h-8 me-3" alt=" Logo" />
                            </a>
                        </div>
                        <span class="text-sm text-black sm:text-center">© 2023. Privacy & Terms.</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer