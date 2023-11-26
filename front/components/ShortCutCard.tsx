"use client"

import Link from "next/link";
import Icon from "@ant-design/icons";
import React from 'react';
import {PlusOutlined, FileAddOutlined } from '@ant-design/icons';


interface ShortCutCardProps {
    // icon: React.ForwardRefExoticComponent<any>;
    href: string;
    label: string;
    className?: string;
}

const ShortCutCard = ({ label, href, className }: ShortCutCardProps) => {
    {
        return (
            <Link key={label} href={href} className={`${className} rounded-full md:rounded-3xl bg-black/25 flex justify-center items-center hover:shadow-md `}>
                <div className="w-[93%] h-[93%] flex flex-col justify-center items-center bg-white aspect-square rounded-full md:rounded-3xl">
                    <Icon component={FileAddOutlined as React.ForwardRefExoticComponent<any>} className="p-2 m-2 text-[40px] md:text-[80px] opacity-40" />
                    <div className=" hidden md:block text-2xl font-bold text-center opacity-40">{label}</div>
                </div>
            </Link>
        )
    }
}

export default ShortCutCard;