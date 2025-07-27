import { useEffect, useState } from "react";


export default function useDebounce<T>(value:T, delay:number):T{
    const[debounceValue, SetdebounceValue] = useState<T>(value);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            SetdebounceValue(value);
        },delay);
        return ()=>{
            clearTimeout(handler);
        }
    },[value, delay]);
    return debounceValue;
}
