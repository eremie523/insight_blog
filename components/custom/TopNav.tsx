"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import { Navigation2, Search, UserRound } from 'lucide-react'
import { NAV_LINKS } from '@/constants/menu'
import { usePathname } from 'next/navigation'

const TopNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav aria-labelledby='brand_name' className='sm:px-8 px-2 pe-4 xl:px-12 py-4 flex justify-between items-baseline bg-light-main shadow fixed top-0 w-screen max-sm:w-[95vw] max-sm:m-[2.5vw] max-sm:rounded-lg z-50'>
                <div className='flex items-end xl:gap-9 gap-6'>
                    <h1 id='brand_name' className='text-2xl font-semibold'><span>Insight</span><span className='text-primary-indigo'>Blog</span></h1>
                    <ul className='pb-0.5 sm:flex hidden gap-2'>
                        {
                            NAV_LINKS.map(navlink => (
                                <li key={navlink.href} className={`hover:text-primary-purple ${navlink.href == pathname && 'text-primary-indigo'} px-4 duration-150 icon-row items-end`}>
                                    {
                                        navlink.icon && navlink.icon
                                    }
                                    <Link href={navlink.href}>{navlink.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex gap-3 items-center max-lg:hidden'>
                    <button>
                        <Search />
                    </button>
                    <ThemeToggler />
                    <Link href={"/login"} className='icon-row items-center justify-center bg-gradient-to-tr from-primary-purple to-60% to-primary-purple/50 hover:bg-light-main border hover:border-primary-purple hover:text-primary-purple duration-500 text-light-main px-4 py-2 rounded-lg'>
                        <UserRound />
                        <span>Login</span>
                    </Link>
                </div>
                <div className='lg:hidden'>
                    <Navigation2 onClick={() => setIsNavOpen((prev) => !prev)} />
                </div>
            </nav>
            <div className={`sm:hidden gap-2 h-[100vh] pt-[5rem] w-screen p-[2.5vw] fixed z-40 backdrop-blur-xl top-0 transition ease-in-out ${!isNavOpen && `translate-y-[-100vh] translate-x-[-100vw] scale-0`}`}>
                <div className={`bg-light-main shadow w-full h-full flex flex-col justify-between p-6 rounded-2xl`}>
                    <ul className='flex flex-col gap-1'>
                        {
                            NAV_LINKS.map(navlink => (
                                <li key={navlink.href} className='w-full'>
                                    <Link href={navlink.href} className={`${navlink.href == pathname && 'bg-primary-indigo'} w-full px-6 py-4 icon-row hover:bg-primary-purple rounded-2xl hover:text-light-primary duration-150 items-end`}>
                                        {
                                            navlink.icon && navlink.icon
                                        }

                                        {navlink.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/login"} className='icon-row items-center justify-center bg-gradient-to-tr from-primary-purple to-60% to-primary-purple/50 hover:bg-light-main border hover:border-primary-purple hover:text-primary-purple duration-500 text-light-main px-6 py-4 rounded-lg'>
                                <UserRound />
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TopNav