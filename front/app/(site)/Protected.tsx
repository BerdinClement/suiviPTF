'use client'

import { UserContext } from "@/context/userContext"
import { useRouter } from "next/navigation"
import { useContext } from "react"


const Protected = ({
    children
}: {
    children: React.ReactNode
}) => {

    const router = useRouter()
    const { user } = useContext(UserContext)
    

    if (!user) {
        router.push('/login')
    }
    return (
        <>
            {children}
        </>
    )
}

export default Protected
