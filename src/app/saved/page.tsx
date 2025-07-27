//@ts-nocheck
"use client"

import JobsGrid from "@/components/jobsGrid";
import { useEffect, useState } from "react";

export default function page() {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  return (
    <div className="text-foreground bg-background flex flex-col w-screen min-h-screen justify-start items-center border-2 border-accent-foreground">
    <JobsGrid jobs={jobs}/>
    </div>
  )
}
