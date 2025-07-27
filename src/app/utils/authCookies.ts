"use server"

import { cookies } from "next/headers"


export async function SetAuthCookies(token:string){
    const cookieStore = await cookies();
    cookieStore.set('authToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
      });
}

export async function DeleteAuthCookies(){
    const cookieStore = await cookies();
    cookieStore.delete('authToken')
}