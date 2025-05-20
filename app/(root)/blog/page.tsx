"use client"
import BlogsListing from '@/components/custom/BlogsListing'
import FilterNav from '@/components/custom/FilterNav'
import React from 'react'

const page = () => {
    return (
        <main className=''>
            <header className='max-container pt-[6rem]'>
                <h2 className='h1-bold text-dark-primary mb-2'>Our Blog</h2>
                <p className='max-w-[780px] h2 text-dark-secondary'>Explore our collection of articles, insights, and stories from our community of passionate writers, photographers, and creators.</p>
            </header>
            <section className='flex lg:flex-row flex-col items-start xl:gap-8 gap-4 max-container bg-light-main min-h-[60vh]'>
                <FilterNav />
                <BlogsListing />
            </section>
        </main >
    )
}

export default page