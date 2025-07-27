//@ts-nocheck
import JobCard from "./jobCard";
export default function JobsGrid({jobs}) {
  return (
    <div className="grid grid-cols-3 gap-10 my-10">
        {jobs.map((job, idx)=>{
            return(
                <JobCard key={idx} job={job}/>
            );
        })}
    </div>
  )
}
