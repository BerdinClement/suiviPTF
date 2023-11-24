"use client"

import Link from "next/link";
import React from 'react';
import type { DescriptionsProps } from 'antd';
import Image from 'next/image'


interface SuiviCardProps {
    href: string;
    className?: string;
}

const SuiviCard = ({ href, className }: SuiviCardProps) => {
    {
        return (
            <Link href={href} className={`${className} `}>
                <div className="relative w-full h-full bg-white aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <Image src="https://loremflickr.com/600/200/paint/?random" alt="Header" width={200} height={10} className="w-full h-4/12 start" />
                    <p className="mt-2 ml-4 font-bold">Présentation</p>
                    <div className="overflow-hidden text-center text-sm p-2 opacity-[40%]">Wikipédia est un projet d’encyclopédie collective en ligne, universelle, multilingue et fonctionnant sur le principe du wiki. Ce projet vise à offrir un contenu librement réutilisable, objectif et vérifiable, que chacun peut modifier et améliorer.</div>
                </div>
            </Link>
        )
    }
}

export default SuiviCard;