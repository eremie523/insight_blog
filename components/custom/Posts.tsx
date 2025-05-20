import { Heart, Share2, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

type Props = {
    id: number,
    title: string,
    imgSrc: string,
    dateCreated: string,
    category?: string,
    author: {
        id: number,
        name: string,
        profileSrc: string
    },
    isSlide?: boolean
}

const Posts = (props: Props) => {
    return (
        <article key={props.id} className={`max-w-[500px] m-auto w-full shadow-lg rounded-2xl overflow-hidden bg-light-main transition ${props.isSlide && `lg:shadow-2xl lg:top-0 lg:absolute lg:w-1/3 translate-y--2 ${(props.id == 1 || props.id == 3) ? `lg:scale-90` : (props.id == 0 || props.id == 4) && `lg:scale-[80%]`} ${props.id == 3 ? `lg:end-[33%] lg:translate-x-[50%] lg:z-[2]` : props.id == 4 ? `lg:end-[0%] lg:translate-x-[0%] lg:z-[1]` : (props.id == 1) ? `lg:start-[30%] lg:translate-x-[-50%] lg:z-[2]` : (props.id == 0) ? `lg:start-[0%] lg:translate-x-[0%] lg:z-[1]` : (props.id == 2) && `lg:end-[50%] lg:translate-x-[50%] lg:z-[3]`}`}`} style={{
            flex: '0 0 100%',
            flexWrap: 'nowrap'
        }}>
            <div className='md:h-[230px] sm:h-[200px] h-[180px] overflow-hidden relative w-full'>
                {props.category && <aside className='absolute z-10 font-semibold text-light-main bg-primary-purple/60 px-4 py-2 end-0 top-0 m-4 rounded-xl capitalize'>{props.category}</aside>}
                <Image alt={props.id.toString()} src={props.imgSrc} width={450} height={230} objectFit='cover' className='w-full h-full transition hover:scale-110'></Image>
            </div>
            <div className='sm:px-6 px-2 py-2 sm:pt-8 sm:pb-4 flex flex-col gap-3'>
                <h4 className='h2-bold text-ellipsis w-full'>{props.title.trim().substring(0, 28).trim()}...</h4>
                <section className='flex flex-row justify-between items-end'>
                    <Link aria-labelledby={props.author.name} href={"/author/id"} className='flex gap-3 items-center justify-start'>
                        <div className='flex items-center justify-center p-2 rounded-full bg-light-secondary'>
                            <Image alt={props.author.name} src={props.author.profileSrc} width={24} height={24} objectFit='cover' objectPosition='center' className='sm:w-[24px] w-[16px] sm:h-[24px] h-[16px]'></Image>
                        </div>
                        <div>
                            <header>
                                <h5 className='font-normal max-sm:text-sm text-primary-purple' id={props.author.name}>{props.author.name}</h5>
                            </header>
                            <time dateTime={props.dateCreated} className='text-sm font-light text-dark-tertiary leading-tight'>{props.dateCreated}</time>
                        </div>
                    </Link>
                    <span className='icon-row text-dark-secondary sm:text-sm text-xs'><Timer size={14} /> <time dateTime='8M'>8 mins</time> read</span>
                </section>
                <aside className='flex justify-end items-center gap-2'>
                    <Button size='sm' className='p-2 bg-light-primary'>
                        <Heart size={18} className='max-sm:w-[16px] max-sm:h-[14px]' />
                    </Button>
                    <Button size='sm' className='p-2 bg-light-primary'>
                        <Share2 size={18} className='max-sm:w-[16px] max-sm:h-[14px]' />
                    </Button>
                </aside>
            </div>
        </article>
    )
}

export default Posts