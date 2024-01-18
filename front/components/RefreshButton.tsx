"use client"

import React from 'react';
import { SyncOutlined } from '@ant-design/icons';

interface RefreshButton {

}

const RefreshButton = ({ }) => {
    return (
        <div className=" 
            rounded-full 
            bg-white 
            w-10 
            h-10
            flex
            justify-center
            items-center
            border 
            border-neutral-500 
            "
        >
            <button
                title="Refresh"
                className="
                    group
                    cursor-pointer
                    outline-none
                    hover:rotate-90
                    duration-300
                    text-2xl
                    text-black
                    "
            >
                <SyncOutlined />
            </button>
        </div>
    )
}

export default RefreshButton;