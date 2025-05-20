"use client"
import React from 'react'
import Button from './Button'
import { ArrowRight } from 'lucide-react'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'

const TrendingToday = () => {
    return (
        <section className='max-container max-lg:px-0 max-lg:py-14 flex flex-col gap-6'>
            <header className='flex flex-row justify-between items-end max-lg:hidden py-0'>
                <h3 className='h1-bold' id='featured_products_header'>Trending Today</h3>
                <Button className="text-primary-indigo! text-md hover:-translate-x-2">
                    <span>View All</span>
                    <ArrowRight size="20" />
                </Button>
            </header>
            <div className='flex flex-col lg:flex-row gap-6 max-lg:gap-14'>
                <section aria-label='most_popular_articles' className='flex-grow bg-light-main lg:rounded-2xl py-6 px-4 max-lg:px-6'>
                    <header>
                        <h3 className='h2-bold' id='explore_categories_header'>Most Popular Articles</h3>
                    </header>
                    <LineChart color='#4F46E5' legend label='trending-weekly' data={[
                        {
                            label: "Mon",
                            value: 30,
                        },
                        {
                            label: "Tues",
                            value: 15,
                        },
                        {
                            label: "Wed",
                            value: 30,
                        },
                        {
                            label: "Thurs",
                            value: 15,
                        },
                        {
                            label: "Fri",
                            value: 22,
                        },
                        {
                            label: "Sat",
                            value: 22,
                        },
                        {
                            label: "Sun",
                            value: 40,
                        },
                    ]} className="mt-4" />
                </section>
                <section aria-label='recent_articles' className='lg:w-1/3 w-full bg-light-main lg:rounded-2xl py-6 px-4 max-lg:px-6'>
                    <header>
                        <h3 className='h2-bold' id='explore_categories_header'>Most Popular Articles</h3>
                    </header>
                    <div className='flex flex-col gap-8 mt-8 items-start justify-center'>
                        <div className='w-full flex items-center justify-center overflow-hidden relative'>
                            <DoughnutChart
                                labels={["True", "False"]}

                                data={{
                                    "analytics": {
                                        value: [30, 15],
                                        color: ['red', 'tranparent']
                                    }
                                }} className="mt-4"
                            />
                        </div>
                        <ul className='text-dark-tertiary w-full md:text-xl text-lg'>
                            <li className='px-4 py-2 border-t border-b border-dark-secondary flex justify-between'>
                                <span className='font-bold text-green-400'>Active</span> <span>230</span>
                            </li>
                            <li className='px-4 py-2 border-b border-dark-secondary flex justify-between'>
                                <span className='font-bold text-blue-400'>Inactive</span> <span>200</span>
                            </li>
                            <li className='px-4 py-2 border-b border-dark-secondary flex justify-between'>
                                <span className='font-bold text-orange-400'>Suspended</span> <span>14</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TrendingToday