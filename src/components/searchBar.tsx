//@ts-nocheck
"use client"

import { Search, Loader } from "lucide-react";

export default function SearchBar({search, setSearch, isLoading}) {
  return (
    <div className="flex flex-row justify-center items-center">
        <input className="border-2 border-foreground p-2 my-2 w-80" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="search jobs"/>
        <button className="border-2 border-foreground p-2 my-2">{isLoading ? <Loader className="animate-spin"/> : <Search/> }</button>
    </div>
  );
}
