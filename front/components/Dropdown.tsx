"use client"

import React from 'react';

interface DropdownProps {
    className?: string;
    options: string[];
}

const Dropdown = ({ className, options }: DropdownProps) => {
    return (
        <div>
            <select
                className={`
                    relative 
                    bg-gray-50ring-0 
                    outline-none 
                    border 
                    border-neutral-500 
                    text-neutral-900 
                    placeholder-black-700 
                    text-sm 
                    rounded-lg
                    focus:ring-black-500 
                    focus:border-black-500 
                    block 
                    w-48 
                    p-2.5 
                    checked:bg-emerald-500
                `}>
                {
                    options.map((option, index) => {
                        return (
                            <option>{option}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown;
