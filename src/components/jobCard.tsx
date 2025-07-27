//@ts-nocheck
"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import Image from "next/image";


export default function JobCard({job}) {
    const [isSaved, setSaved] = useState(job.isSaved || false);
    function handleSave(){
        const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
        if(isSaved){
            const filteredJobs = savedJobs.filter((j)=> j.id !== job.id);
            localStorage.setItem("savedJobs", JSON.stringify(filteredJobs));
            job.isSaved = false;
            setSaved(false);
            alert("job removed!");
        }
        else{
            localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, {...job, isSaved:true} ]));
            setSaved(true);
            alert("job saved!");
        }           
    }
    function handleClick(){
        localStorage.setItem("viewJob", JSON.stringify(job));
    } 
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>
            {job.company_name}
        </CardDescription>
        <CardAction>
          <Button onClick={()=>{handleSave();}} variant="link">{isSaved ? "Unsave":"Save"}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <h1>Job Type :</h1>
              <p>{job.job_type}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <h1>Salary :</h1>
              <p>{job.salary != "" ? job.salary : "competitive" }</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <h1>Job Type :</h1>
              <p>{job.job_type}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <h1>Category :</h1>
              <p>{job.category}</p>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      <Link href={`/jobs/${job.id}`}>
        <Button type="submit" className="w-full cursor-pointer" onClick={()=>{handleClick();}}>
          View details
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
