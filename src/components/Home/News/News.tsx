import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading
                heading="Travel News for You"
                subheading="Stay updated with the latest travel trends and tips!" />
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
        items-center mt-20 items-stretch'>
                <div>
                    <NewsCard image="/images/n1.jpg" title="Top 10 place to visit in Australia" date="15 November 2024" />
                </div>
                <div>
                    <NewsCard image="/images/n2.jpg" title="Top 10 place to visit in Japan" date="25 August 2024" />
                </div>
                <div>
                    <NewsCard image="/images/n3.jpg" title="Lakes in Germany to Visit" date="9 September 2024" />
                </div>
                <div>
                    <NewsCard image="/images/n4.jpg" title="Top 5 places to visit in Pakistan" date="16 December 2024" />
                </div>
            </div>
        </div>
    )
}

export default News