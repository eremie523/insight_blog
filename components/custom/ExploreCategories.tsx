import { CATEGORIES } from '@/constants/menu'
import Link from 'next/link'
import React from 'react'

const ExploreCategories = () => {
  return (
    <section aria-labelledby='explore_categories_header' className='flex flex-col gap-6 bg-light-main max-container'>
      <header>
        <h3 className='h1-bold text-center' id='explore_categories_header'>Explore Categories</h3>
      </header>
      <ul className='list-none grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-6 gap-2'>
        {
          CATEGORIES.map(category => (
            <li id={category.title} key={category.id}>
              <Link href={`/categories/${category.id}`} className={`sm:rounded-xl rounded-md   transition translate-y--2 w-full bg-gradient-to-r from-primary-indigo/80 to-primary-purple/80 hover:from-primary-purple flex flex-col items-center justify-center text-light-main lg:py-8 py-5 px-5 shadow`}>
                {category.icon}
                <label htmlFor={category.title} className='font-semibold'>{category.title}</label>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default ExploreCategories