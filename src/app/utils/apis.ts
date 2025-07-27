export async function getJobs(limit:string){
    const url = "https://remotive.com/api/remote-jobs?limit=" + limit;
    const res = await fetch(url);
    const data = await res.json();
    return data.jobs;
}

export async function searchJobs(query:string){
    const url = "https://remotive.com/api/remote-jobs?search=" + query;
    const res = await fetch(url);
    const data = await res.json();
    return data.jobs;
}

export async function getJobsbyCategory(category:string){
    const url = "https://remotive.com/api/remote-jobs?category=" + category;
    const res = await fetch(url);
    const data = await res.json();
    return data.jobs;
}

export async function getCategories(){
    const url = "https://remotive.com/api/remote-jobs/categories";
    const res = await fetch(url);
    const data = await res.json();
    return data.jobs;
}

export async function filterJobsbyCompany(company:string){
    const url = "https://remotive.com/api/remote-jobs?company_name=" + company;
    const res = await fetch(url);
    const data = await res.json();
    return data.jobs;
}



