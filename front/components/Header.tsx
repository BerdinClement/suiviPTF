'use client'

import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation'

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {

    const pathname = usePathname().split('/').filter((x) => x)

    return (
        <div className='flex flex-col h-full'>
            <Breadcrumb
                separator=">"
                className='py-4 text-[20px]'
                items={[
                    {
                        href: '/',
                        title: "Accueil",
                      },
                    ...pathname.map((segment, index) => ({
                        href: `/${pathname.slice(0, index + 1).join('/')}`,
                        title: (
                            <>
                                <span className="capitalize">{segment}</span>
                            </>
                        ),
                    })),
                ]} />
            <div className='h-full'>
                {children}
            </div>
        </div>
    );
};

export default Header;