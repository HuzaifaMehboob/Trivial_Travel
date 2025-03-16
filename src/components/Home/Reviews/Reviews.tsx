import React from 'react'
import { FaStar } from 'react-icons/fa6'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
    return (
        <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
            <div className='w-[90%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-2xl font-semibold text-white'>
                        What our customers are saying us?
                    </h1>
                    <p className="text-gray-200 mt-6 ">
                        Amazing experience! The customer support was very helpful, and the product quality exceeded my expectations. Will definitely order again!
                    </p>
                    <div className='mt-6 flex items-center space-x-6'>
                        <div>
                            <p className='text-2xl font-bold text-white'>4.88</p>
                            <p className='text-white mb-2'>Overall Rating</p>
                            <div className='flex items-center'>
                                <FaStar className='text-white'/>
                                <FaStar className='text-white'/>
                                <FaStar className='text-white'/>
                                <FaStar className='text-white'/>
                                <FaStar className='text-white'/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider */}

                <div className='overflow-hidden'>
                    <ReviewSlider/>
                </div>
            </div>
        </div>
    )
}

export default Reviews