"use client"

import React from 'react'
import Posts from './Posts'
import { FEATURED_PRODUCTS } from '@/constants'
import Button from './Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const FeaturedPosts = () => {
  const [featuredProducts, setFeaturedProducts] = React.useState(FEATURED_PRODUCTS)

  return (
    <section aria-labelledby='featured_products_header' className='flex flex-col gap-6 bg-gradient-to-b from-light-primary to-light-main max-container'>
      <header className='flex flex-row justify-between items-center'>
        <h3 className='h1-bold' id='featured_products_header'>Featured Products</h3>
        <Button className="text-primary-indigo! max-sm:text-sm hover:-translate-x-2">
          <span>View All</span>
          <ArrowRight size="20" className='max-sm:w-[16px] max-sm:h-[16px]' />
        </Button>
      </header>
      <ul className='list-none lg:flex grid lg:relative lg:h-[450px] lg:justify-center items-center md:grid-cols-2 gap-6'>
        {
          featuredProducts.map((product) => (
            <li key={product.id} className='w-full'>
              <Posts
                {...product}
                isSlide
              />
            </li>
          ))
        }
        <div className="lg:flex hidden justify-between items-center absolute bottom-0 left-0 right-0 px-4 py-2 z-10">
          <Button className='border-2' clickAction={() => {
            setFeaturedProducts(prev => {
              const x = prev.map((product) => ({ ...product, id: ((product.id - 1) < 0 ? (product.id - 1) + 5 : (product.id - 1)) % 5 }))
              console.log(x);
              return x;
            })
          }}><ArrowLeft /></Button>
          <Button className='border-2' clickAction={() => {
            setFeaturedProducts(prev => {
              const x = prev.map((product) => ({ ...product, id: (product.id + 1) % 5 }))
              console.log(x);
              return x;
            })
          }}><ArrowRight /></Button>
        </div>
      </ul>
    </section>
  )
}

export default FeaturedPosts