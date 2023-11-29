"use client";

import { RESTRICTED, SIDEBAR_LINKS } from "@/constants";
import Icon, { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Divider, FloatButton, Tooltip } from "antd";
import Link from "next/link";
import Image from 'next/image'
import React, { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";


interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {

    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const path = usePathname();

    const {user, setUser} = useContext(UserContext);
    
    var role = [RESTRICTED.ALL];
    if (user.user.student) {
        role.push(RESTRICTED.STUDENT);
    }
    if (user.user.tutor) {
        role.push(RESTRICTED.TUTOR);
    }
    if (user.user.isAdmin) {
        role.push(RESTRICTED.ADMIN);
    }

    const handleLogout = async () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/login");
    }

    return (
        <div className="flex h-full">
            <nav className="hidden md:flex flex-col justify-between items-center transition-all shadow-2xl">
                <div>
                    <Image src="/logo.svg" alt="PTF" width={90} height={90} className={`mx-auto ${open ? 'pb-4' : 'hidden'}`} />
                    <div>
                        {SIDEBAR_LINKS.map((link, index) => {
                            if (role.includes(link.restricted)) {
                                return (
                                    <Tooltip placement="right" key={index} title={link.label}>
                                        <Link
                                            href={link.href}
                                            className={`flex items-center text-black text-sm ${open ? 'p-2 ml-2 rounded-l-xl' : 'rounded-full m-2'} ${path === link.href ? 'bg-purple text-white' : 'hover:bg-grey'}`}
                                        >
                                            <Icon component={link.icon as React.ForwardRefExoticComponent<any>} className="p-2 m-2 text-xl" />
                                            {
                                                open && link.label
                                            }
                                        </Link>
                                    </Tooltip>
                                )
                            }
                        })}
                    </div>
                    <Divider className="bg-stone-600" />
                    {
                        <button
                            className={`flex items-center text-black text-sm ${open ? 'p-2 w-full' : 'rounded-full m-2'}`}
                        >
                            <LogoutOutlined onClick={handleLogout} className="p-2 m-2 text-xl" />
                            {
                                open && 'Se déconnecter'
                            }
                        </button>

                    }
                </div>
                <div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="block p-2 m-2 text-black hover:pointer rounded-full"
                    >
                        {
                            open && <DoubleLeftOutlined className="p-1 m-1 text-xl" />
                        }
                        {
                            !open && <DoubleRightOutlined className="p-1 m-1 text-xl" />
                        }
                    </button>
                </div>
            </nav>
            <FloatButton.Group
                trigger="click"
                type="default"
                style={{ left: 24 }}
                icon={<MenuOutlined />}
                className="md:hidden"
            >
                {SIDEBAR_LINKS.map((link, index) => {
                    if (role.includes(link.restricted)) {
                        return (
                            <FloatButton
                                key={index}
                                icon={<Icon component={link.icon as React.ForwardRefExoticComponent<any>} />}
                                tooltip={<div>{link.label}</div>}
                                onClick={() => router.push(link.href)}
                            />
                        )
                    }

                })}
                <FloatButton icon={<LogoutOutlined />} onClick={handleLogout} tooltip={<div>Se déconnecter</div>} />
            </FloatButton.Group>
            <main className="h-full flex-1 h-full overflow-y-auto p-2 bg-white">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;