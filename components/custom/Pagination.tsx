import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {
    noOfItems: number,
    itemsPerPage: number,
    currentPage?: number
}

const Pagination = ({ }: Props) => {
    return (
        <div className='flex items-center justify-center pt-8 px-2 gap-2'>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary bg-primary-indigo hover:bg-primary-purple duration-500 text-light-main'><ArrowLeft /></div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary'>1</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary bg-primary-indigo text-light-primary'>2</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary'>3</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary'>...</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary'>10</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary'>11</div>
            <div className='rounded-lg border-2 w-[2.25rem] h-[2.25rem] flex items-center justify-center border-dark-tertiary bg-primary-indigo hover:bg-primary-purple duration-500 text-light-main'><ArrowRight /></div>
        </div>
    )
}

export default Pagination