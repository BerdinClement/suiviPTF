"use client"

import React from 'react';

interface DropdownProps {
    className?: string;
    options: {
        label: string;
        value: string;
    }[] 
};


const Dropdown = ({ className, options }: DropdownProps) => {
    return (
        <div>
            <select
                placeholder='Select an option'
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
                    w-full
                    p-2.5 
                    checked:bg-emerald-500
                `}>
                {
                    options.map((option, index) => {
                        return (
                            <option value={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown;
