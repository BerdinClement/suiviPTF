"use client"

import { SHORTCUT_LINKS } from "@/constants";
import Link from "next/link";
import Icon from "@ant-design/icons";
import React from 'react';


const ShortCutCard = ({}) => {
    {
        return (
            <div className="flex flex-wrap gap-4">
                {
                    SHORTCUT_LINKS.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} className="w-1/2 rounded-3xl bg-black/25 flex justify-center items-center hover:shadow-lg">
                                <div className="w-[93%] h-[93%] flex flex-col justify-center items-center rounded-3xl bg-grey ">
                                    <Icon component={link.icon as React.ForwardRefExoticComponent<any>} className="p-2 m-2 text-[80px] opacity-40" />
                                    <div className="text-2xl font-bold text-center opacity-40">{link.label}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default ShortCutCard;