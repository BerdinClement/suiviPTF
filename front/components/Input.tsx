"use client"

import React from 'react';

interface InputProps {
    type: string;
    className?: string;
    placeholder?: string;
    pattern?: string;
    required?: boolean;
    value: string;
    setValue: (value: string) => void;
}

const Input = ({ placeholder, className, type, pattern, required, value, setValue }: InputProps) => {
    {
        return (
            <div className="">
                <input
                    type={type}
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
                        w-64 
                        p-2.5 
                        checked:bg-emerald-500
                        ${className}
                    `}
                    placeholder={placeholder}
                    pattern={pattern}
                    required={required}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        )
    }
}

export default Input;
