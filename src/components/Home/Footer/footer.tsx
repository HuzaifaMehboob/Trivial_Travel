import React from 'react';
import { TbAirBalloon } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <div className='flex gap-3 items-center'>
                        <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                            <TbAirBalloon className='w-6 h-6 text-white' />
                        </div>
                        <h1 className='text-xl md:text-3xl text-blue-950 uppercase font-bold'>Trivial</h1>
                        </div>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query?
                        </p>
                        <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                            Contact us
                        </a>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Trivial</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">About</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Features</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Components Library</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Quick Start</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">User Guide</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">News</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">New Updates</a></li>
                            <li><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Events</a></li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500">©<a href="https://pagedone.io/">trivial</a> 2024, All rights reserved.</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                            <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="Social Media">
                                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white" />
                                    </g>
                                </svg>
                            </a>
                            <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
