import { useState, useEffect } from "react";
import Job from "./Job";
import { GridLoader } from "react-spinners";



const JobsListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch( isHome ? '/api/jobs?_limit=4' : '/api/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-center p-6 text-center font-bold text-black text-5xl">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="flex w-screen flex-col items-center justify-center">
            <GridLoader />
          </div>
        ) : (
          jobs.map((job) => <Job key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default JobsListings;
