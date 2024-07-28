import Job from "./Job";
import jobs from '../jobs.json';


const JobsListings = () => {
  const recentJobs = jobs.slice(0,4)
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-center p-6 text-center font-bold text-black text-5xl">
        Last Jobs
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentJobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobsListings;
