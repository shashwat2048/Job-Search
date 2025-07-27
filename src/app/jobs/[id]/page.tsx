//@ts-nocheck
"use client"
import JobDetails from "@/components/JobDetails";
import { useEffect } from "react";

export default function JobPage() {
    const job = JSON.parse(localStorage.getItem("viewJob")) || {};
    console.log(job );
  return (
    <JobDetails job={job}/>
  )
}
