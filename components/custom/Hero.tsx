import { Camera, PencilLine } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='lg:h-[90vh] grid lg:grid-cols-2 grid-cols-1 gap-6 items-center max-container pt-[6rem] py-16'>
            <section className='flex flex-col gap-7 xl:gap-10'>
                <header>
                    <h2 className='h'>
                        <span>Share Your</span>
                        <br />
                        <span className='text-primary-indigo font-semibold'>Creative Journey</span>
                    </h2>
                    <p className='mt-2 lg:text-xl text-dark-secondary text-wrap lg:pr-3'>Join our community of passionate writers, photographers, and creators. Share your stories, inspire others, and connect with like-minded individuals from around the globe.</p>
                </header>
                <aside className='text-dark-tertiary text-md flex md:gap-6 gap-2'>
                    <Button>
                        <PencilLine />
                        <span>Write & Share</span>
                    </Button>
                    <Button>
                        <Camera />
                        <span>Visual Stories</span>
                    </Button>
                </aside>
                <footer className='flex md:gap-6 gap-2'>
                    <Button shadow hoverAnimateType='translate' color='light-main' className='bg-gradient-to-r from-primary-indigo to-primary-purple hover:from-primary-purple'>
                        <i></i>
                        <span>Start Reading</span>
                    </Button>
                    <Button shadow hoverAnimateType='translate'>
                        <i></i>
                        <span>Start Writing</span>
                    </Button>
                </footer>
            </section>
            <section className='h-full lg:flex items-center hidden'>
                <div className='grid grid-cols-2 p-1 gap-6'>
                    <Image alt='' src={'/assets/images/hero-1.jpg'} width={310} height={500} objectFit='cover' objectPosition='center' className='overflow-hidden w-100 h-full rounded-3xl transition translate-y--2 duration-400'></Image>
                    <div className='flex flex-col gap-6 h-full'>
                        <Image alt='' src={'/assets/images/hero-2.jpg'} width={310} height={245} objectFit='cover' objectPosition='center' className='overflow-hidden w-100 h-[50%] rounded-3xl transition translate-y--2 duration-400'></Image>
                        <Image alt='' src={'/assets/images/hero-3.jpg'} width={310} height={245} objectFit='cover' objectPosition='center' className='overflow-hidden w-100 h-[50%] rounded-3xl transition translate-y--2 duration-400'></Image>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero