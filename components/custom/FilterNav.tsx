"use client"
import React from 'react'
import Button from './Button'
import { Search } from 'lucide-react'
import { SORT_OPTIONS } from '@/constants'
import { FilterByCategories, FilterByTags } from './FilterByFromServer'
import { initFilters, useFilters } from '@/states/contexts/filterContext'

const FilterNav = () => {
    const { setFilters } = useFilters();

    return (
        <nav aria-label='side-nav' className='border border-dark-tertiary/40 px-4 py-8 rounded-xl lg:w-[300px] w-full'>
            <header className='flex flex-col items-start gap-6'>
                <section className='flex justify-between items-center w-full'>
                    <h4 className='font-semibold'>Filters</h4>
                    <span className='text-xs text-primary-purple hover:underline cursor-pointer duration-100' onClick={() => { setFilters(initFilters.filters) }}>Clear All</span>
                </section>
                <section aria-label="filter-by-search" className='flex flex-col gap-2 w-full'>
                    <span className=''>Search</span>
                    <div className='flex w-full border border-dark-tertiary/40 rounded-lg'>
                        <Button size='sm' type='submit' color='' className='hover:bg-primary-indigo/80 rounded-none rounded-s-lg hover:outline-2 hover:border-2 outline-primary-indigo'>
                            <Search />
                        </Button>
                        <input type="search" className='bg-light-main flex-grow rounded-e-lg px-2 py-2' placeholder='Search articles...' />
                    </div>
                </section>
                <section aria-label="filter-by-sort" className='flex flex-col gap-2 w-full'>
                    <span className=''>Sort by</span>
                    <div className='flex w-full border border-dark-tertiary/40 rounded-lg'>
                        <select className='bg-light-main flex-grow rounded-lg px-2 py-2 capitalize' defaultValue={SORT_OPTIONS.default} >
                            {SORT_OPTIONS.values.map((option, i) => (
                                <option key={i} value={option} className='capitalize px-2 py-2'>{option.replace('_', ' ')}</option>
                            ))}
                        </select>
                    </div>
                </section>
                <FilterByCategories />
                <FilterByTags />
            </header>

        </nav>
    )
}

export default FilterNav