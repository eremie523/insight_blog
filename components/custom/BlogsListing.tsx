import Pagination from '@/components/custom/Pagination'
import Posts from '@/components/custom/Posts'
import { FEATURED_PRODUCTS } from '@/constants'
import { useFilters } from '@/states/contexts/filterContext';
import React from 'react'

const BlogsListing = () => {
    const { filters: { tags, categories } } = useFilters();

    return (
        <div className='flex-grow max-lg:w-full'>
            <header className='mb-4'>
                <h3 className='text-dark-secondary max-w-[670px] wrap-normal'>
                    {((categories.length > 0) && (tags.length > 0)) &&
                        (
                            <>
                                <span>Filtered By:  </span>
                                <span className='inline-flex flex-wrap gap-2 flex-row items-center justify-start'>
                                    {
                                        tags.map((tag, i) => (
                                            <label key={i} htmlFor={tag} className='border border-dark-tertiary/40 py-1 px-2 rounded-lg text-xs font-semibold text-dark-secondary'>
                                                <input id={tag} type="checkbox" className='hidden' />
                                                <span className='capitalize'>{tag}</span>
                                            </label>
                                        ))
                                    }
                                    {
                                        categories.map((cat, i) => (
                                            <label key={i} htmlFor={cat} className='border border-dark-tertiary/40 py-1 px-2 rounded-lg text-xs font-semibold text-dark-secondary'>
                                                <input id={cat} type="checkbox" className='hidden' />
                                                <span className='capitalize'>{cat}</span>
                                            </label>
                                        ))
                                    }
                                </span>
                            </>
                        )
                    }
                </h3>
            </header>
            <ul className='grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xl:gap-8 gap-4 w-full'>
                {
                    FEATURED_PRODUCTS.map((product) => (
                        <li key={product.id}>
                            <Posts {...product} />
                        </li>
                    ))
                }
            </ul>
            <footer>
                <Pagination noOfItems={20} itemsPerPage={6} currentPage={1} />
            </footer>
        </div>
    )
}

export default BlogsListing