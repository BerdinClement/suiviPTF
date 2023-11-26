'use client'
import { UserContext } from '@/context/userContext'
import Image from 'next/image'
import { useContext } from 'react'

const Hello = () => {

    const { user } = useContext(UserContext)
    

    return (
        <div className='flex items-center justify-center gap-4'>
            <div className='flex flex-col'>
                <p className='text-[3vw]'>Bonjour,</p>
                <p className='text-purple text-[2.5vw]'>{user.user.firstName ? user.user.firstName : ''}</p>
            </div>
            <Image src={`https://ui-avatars.com/api/?rounded=true&name=${user.user.firstName}+${user.user.lastName}`} className='rounded-full' width={90} height={10} alt={'Icon Profil'} />
        </div>
    )
}

export default Hello