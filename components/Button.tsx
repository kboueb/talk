"use client"
import clsx from 'clsx'
import React from 'react'

interface ButtonProps{
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullwidth?: boolean,
    children?: React.ReactNode,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    disable?: boolean;
}

const Button:React.FC<ButtonProps> = ({
    type,
    fullwidth,
    children,
    onClick,
    secondary,
    danger,
    disable
}) => {
    return (
        <div className='mt-2'>
            <button
                onClick={onClick}
                type={type}
                disabled={disable}
                className={clsx(`
                        flex
                        justify-center
                        rounded-md
                        text-sm
                        py-2
                        px-3
                        font-semibold
                        focus-visible:outline                        
                        focus-visible:outline2
                        focus-visible:outline-offset-2
                    `, 
                    disable && "opacity-50 cursor-default",
                    fullwidth && "w-full",
                    secondary? 'text-gray-900' : 'text-white',
                    danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                    !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
                    )}
            >
                {children}
            </button>
        </div>
    )
}

export default Button