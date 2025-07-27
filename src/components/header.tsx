"use client"
import { Archive, Search} from 'lucide-react';
import Image from "next/image";
import Link from "next/link"
import { ThemeToggleBtn } from './themeToggleBtn';
import { useAuth } from '@/app/hooks/AuthContext';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
export default function Header() {
    const {user, logout} = useAuth();
    const router = useRouter();
    function handleLogout(){
        logout();
        router.push("/login");
    }
  return (
    <div className="flex flex-row w-screen px-12 py-2 justify-between items-center bg-background backdrop-blur-2xl text-foreground">
        <Link href="/">
            <h1 className="text-3xl font-bold">JobSearch</h1>
        </Link>
        <Link href="/jobs" className="flex items-center gap-2">
            <h2 className="text-3xl">
                Find Jobs
            </h2>
            <Search/>
        </Link>
        <ThemeToggleBtn/>
        {user ? (
                <div className="flex justify-center items-center gap-15">
                    <Link href="/saved"><Archive/></Link>
                    <Button onClick={()=>{handleLogout();}}>Log out</Button>
                </div>
        ) : (
                <div className="flex justify-center items-center gap-15">
                    <Link href="/login">
                        <h2 className="text-lg">Login/SignUp</h2>
                    </Link>
                </div>
        )}
    </div>
  )
}
