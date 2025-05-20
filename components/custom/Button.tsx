"use client"
import React, { MouseEvent, ReactNode } from 'react'

type Props = {
    children: ReactNode
    full?: boolean,
    color?: string,
    size?: 'sm' | 'md' | 'lg',
    type?: 'button' | 'submit' | 'reset'
    hoverBg?: string,
    className?: string,
    hoverAnimateType?: 'translate',
    hoverAnimateDirection?: 'y' | 'x',
    hoverAnimateDegree?: string,
    shadow?: boolean,
    clickAction?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, full, color, hoverBg, className, hoverAnimateDegree, hoverAnimateDirection, hoverAnimateType, shadow, size, type, clickAction }: Props) => {
    return (
        <button
            aria-label='button'

            {
            ...clickAction && {
                onClick: (e: MouseEvent<HTMLButtonElement>) => {
                    clickAction(e)
                }
            }
            }

            type={type ? type : 'button'}
            className={`
            ${size ?
                    size == 'sm' ? 'sm:px-3 px-2 py-2' :
                        size == 'lg' && 'lg:px-9 sm:px-6 px-3 lg:py-4 py-3'
                    : 'lg:px-6 lg:py-3 sm:px-3 px-2 py-2'
                } 
            rounded-lg  
            icon-row 
            transition 
            ${shadow && 'shadow'} 
            ${hoverAnimateType == 'translate' && `translate-${hoverAnimateDirection ? hoverAnimateDirection : 'y'}-${hoverAnimateDegree ? hoverAnimateDegree : '-2'}`} 
            text-${color ? color : 'dark-primary'} 
            ${hoverBg ? hoverBg : 'hover:bg-light-secondary'} 
            ${full && 'w-full'} ${className && className}`
            }
        >
            {children}
        </button>
    )
}

export default Button