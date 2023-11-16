import Image from 'next/image'

interface HelloProps {
    firstName: string,
    lastName: string,
}

const Hello = ({firstName, lastName}: HelloProps) => {

    return (
        <div className='flex items-center justify-center gap-4'>
            <div className='flex flex-col'>
                <p className='text-[3vw]'>Bonjour,</p>
                <p className='text-purple text-[2.5vw]'>{firstName}</p>
            </div>
            <Image src={`https://ui-avatars.com/api/?rounded=true+name=${firstName}+${lastName}+format=svg`} className='rounded-full' width={90} height={10} alt={'Icon Profil'} />
        </div>
    )
}

export default Hello