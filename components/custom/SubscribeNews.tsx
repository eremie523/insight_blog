import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SubscribeNews = () => {
  return (
    <section aria-labelledby='news_letter_header' className='bg-light-main gap-10 grid lg:grid-cols-2 mb-14 max-container'>
        <div className='flex flex-col justify-center lg:gap-8 gap-4'>
            <header>
                <h3 className='h1-bold' id='news_letter_header'>Stay Connected</h3>
                <p className='sm:text-xl'>Subscribe to our newsletter and never miss the latest articles, updates, and exclusive content.</p>
            </header>
            <form action="" id='subscribe_form' className='flex flex-col lg:gap-8 gap-4'>
              <div className="flex flex-row gap-4">
                <div className='flex-grow'>
                  <input type="email" placeholder='Enter email address' className='w-full h-full bg-light-secondary sm:px-6 px-4 sm:py-3 py-2 focus:outline-0 focus-within:border-red-400! focus:border-red-400!' />
                </div>
                <Button type='submit' color='light-main' className='bg-gradient-to-r from-primary-indigo to-primary-purple hover:from-primary-purple'>Subscribe</Button>
              </div>
              <div className='icon-row'>
                <label>
                  <input type='checkbox' />
                </label>
                <span className='text-sm text-dark-secondary'>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company. </span>
              </div>
            </form>
        </div>
        <div className='flex items-center justify-center max-lg:hidden'>
            <Image src={"/assets/images/stay-connected.jpg"} alt='Stay Connected' width={690} height={260} className='w-full max-h-[260px] max-w-[690px] h-full rounded-3xl'></Image>
        </div>
    </section>
  )
}

export default SubscribeNews