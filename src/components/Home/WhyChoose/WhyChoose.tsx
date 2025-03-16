import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'
const WhyChoose = () => {
    return (
        <div className='pt-16 pb-24'>
            {/* Section Heading */}
            <SectionHeading heading='Why Choose Us' subheading='Choose us to make your travel memorable' />
            <div className='grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center
        mt-20'>
                {/* Why choose card */}
                <div>
                    <WhyChooseCard
                        image="/images/c1.svg"
                        title="Best Price Guarantee"
                        description="Get the lowest prices on hotels with our price match guarantee."
                    />
                </div>
                <div>
                    <WhyChooseCard
                        image="/images/c2.svg"
                        title="Easy & Quick Booking"
                        description="Book your stay in just a few clicks with our seamless booking process."
                    />
                </div>
                <div>
                    <WhyChooseCard
                        image="/images/c3.svg"
                        title="Customer Care 24/7"
                        description="Our support team is available 24/7 to assist you anytime, anywhere."
                    />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose