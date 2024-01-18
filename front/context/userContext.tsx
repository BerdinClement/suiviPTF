'use client'

import React, {createContext, useEffect, useState} from "react";
import { getProfile } from "@/services/auth";

export const UserContext = createContext<any>(null)

export function UserContextProvider({children}: {children: React.ReactNode}){

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(!user){
            const fetchProfile = async () =>{
                const profile = await getProfile()
                setUser(profile)
            }
            fetchProfile()
        }
    },[])

    return(
        <UserContext.Provider value={{user, setUser}}>
                {children}
        </UserContext.Provider>
    )
}