"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { LogOut, onAuthStateChangedListener} from '../services/firebaseAuth';
import type { User } from 'firebase/auth';

type AuthContextType = {
    user: User | null;
    logout: ()=> Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)
export function AuthProvider({children}:{children : ReactNode}) {
    const[user, setUser] = useState<User|null>(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener(setUser);
        return ()=> unsubscribe();
    },[]);

    const logout = async()=>{
        await LogOut();
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{user, logout}}>
        {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}
