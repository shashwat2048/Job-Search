//@ts-nocheck
"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import Image from "next/image";
export default function JobDetails({job}) {
  return (
    <div>
     <Card className="w-auto m-10 p-5">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>
            {job.company_name}
        </CardDescription>
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
            <div className="grid grid-cols-2 gap-2">
              <h1>Date :</h1>
              <p>{job.publication_date}</p>
            </div>
            <Link href={job.url}>
                <Button type="submit" className="w-fit cursor-pointer">
                View job
                </Button>
            </Link>
            <div className="grid grid-cols-1 gap-2">
              <h1>Description :</h1>
              <div className="flex flex-col prose prose-invert max-w-none text-justify" dangerouslySetInnerHTML={{ __html: job.description }}></div>
            </div>
          </div>
      </CardContent>
    </Card>
    </div>
  )
}
