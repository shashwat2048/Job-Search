"use client"
import { useEffect, useState } from "react";
import { getJobs, searchJobs } from "../utils/apis";
import useDebounce from "../hooks/useDebounce";
import SearchBar from "@/components/searchBar";
import JobsGrid from "@/components/jobsGrid";

export default function JobPage() {
    const [jobs, setJobs] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [isLoading, setLoading] = useState(true);
    const debounceSearch = useDebounce(search, 500);
    useEffect(()=>{
        async function fetchSearchJobs(){
            setLoading(true);
            const data = await searchJobs(debounceSearch.trim());
            setJobs(data);
            setLoading(false);
        }
        fetchSearchJobs();
    },[debounceSearch]);
    useEffect(()=>{
        async function fetchJobs(){
            setLoading(true);
            const data = await getJobs("21");
            setJobs(data);
            setLoading(false);
        }
        fetchJobs();
    },[]);

  return (
    <div className="text-foreground bg-background flex flex-col w-screen min-h-screen justify-start items-center border-2 border-accent-foreground">
        <SearchBar search={search} setSearch={setSearch} isLoading={isLoading}/>
        <JobsGrid jobs={jobs}/>
    </div>
  );
}
