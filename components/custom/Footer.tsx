import { CATEGORIES, NAV_LINKS, SOCIAL_MEDIA_LINKS } from '@/constants/menu'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-light-secondary/70 '>
        <div className='lg:py-12 py-8 px-6 grid xl:grid-cols-4 md:grid-cols-3 lg:gap-12 gap-8'>
            <section aria-label='primary_footer_section' className='flex flex-col gap-6'>
                <h2 id='footer_brand_name' className='text-2xl font-semibold'><span>Insight</span><span className='text-primary-indigo'>Blog</span></h2>
                <p className='text-dark-secondary'>Exploring ideas that shape our world through thoughtful content and diverse perspectives.</p>
                <div className='flex items-center gap-3'>
                    {SOCIAL_MEDIA_LINKS.map(media => (
                        <Link href={media.href} key={media.href} className='p-3 transition translate-y--2 hover:shadow-xl rounded-full text-light-primary bg-dark-tertiary/60 flex items-center justify-center'>
                            {media.icon}
                        </Link>
                    ))}
                </div>
            </section>
            <section aria-label='categories_section'>
                <h2 className='font-semibold text-lg mb-4'>Categories</h2>
                <ul className='flex flex-col gap-3'>
                    {CATEGORIES.map(category => (
                        <li key={category.id} className='text-dark-secondary hover:text-primary-indigo'>
                            <Link href={`/categories/${category.id}`}>{category.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section aria-label='quick_links_section'>
                <h2 className='font-semibold text-lg mb-4'>Quick Links</h2>
                <ul className='flex flex-col gap-3'>
                    {NAV_LINKS.map((link, i) => (
                        <li key={i} className='text-dark-secondary hover:text-primary-indigo'>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section aria-label='subscribe_section'>
                <h2 className='font-semibold text-lg mb-4'>Subscribe</h2>
                <p className='mb-6'>Get the latest updates directly to your inbox.</p>
                <form action="" className='flex max-w-[500px]'>
                    <input type="email" className='bg-light-main flex-grow rounded-s-full px-4 py-2' placeholder='Your email' />
                    <Button size='sm' type='submit' color='light-main' className='bg-primary-indigo hover:bg-primary-indigo/80 rounded-none rounded-e-full'>
                        <Send />
                    </Button>
                </form>
            </section>
        </div>
        <div className='border-0 border-t border-t-dark-tertiary py-8 px-6'>
            <p className='text-dark-tertiary'>&copy; 2025 InsightBlog. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer