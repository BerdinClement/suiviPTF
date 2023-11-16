import Image from 'next/image'

interface HelloProps {
    firstName: string,
    lastName: string,
}

const Hello = ({firstName, lastName}: HelloProps) => {

    return (
        <div className='flex items-center gap-2'>
            <div className='flex flex-col'>
                <p className='text-xl'>Bonjour,</p>
                <p className='text-purple text-lg'>{firstName}</p>
            </div>
            <Image src={`https://ui-avatars.com/api/?rounded=true+name=${firstName}+${lastName}+format=svg`} className='rounded-full' width={64} height={10} alt={'Icon Profil'} />
        </div>
    )
}

export default Hello