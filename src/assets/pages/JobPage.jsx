// import { useEffect, useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";
import  ViewAllJobs from "../componenets/ViewAllJobs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";



const JobPage = ({deleteJob}) => {
  const job = useLoaderData();
 const { id } = useParams();

 const navigate =  useNavigate();

 const onDeleteClick = (jobId) => {
  const confirm = window.confirm('Are You Sure you want to delete this listing')
  if (!confirm){
    return
  }
  else{
    deleteJob(jobId);

    toast.success('Job deleted successfully');

    navigate('/jobs');
  }
 }
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

// fetching data using useEffect
//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetch(`/api/jobs/${id}`);
//         const data = await response.json();
//         setJob(data);
//       } catch (error) {
//         console.error('Error fetching job data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobData();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <GridLoader color="#4A90E2" />
//       </div>
//     );
//   }


return (
  <div className="bg-gray-100 min-h-screen py-10 ">
    <div className="container mx-auto px-4 mb-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Job Details</h1>
      {job ? (
        <div>
       
       <div className="flex flex-row space-x-4 mb-4">
  <Link to={`/edit-job/${id}`} className="w-1/2 hover:bg-black bg-blue-600 p-4 font-bold text-white text-center cursor-pointer">
    Edit Job
  </Link>
  <div onClick={
    ()=>{
      onDeleteClick(id)
    }
  } className="w-1/2 hover:bg-black bg-red-600 p-4 font-bold text-white text-center cursor-pointer">
    Delete Job
  </div>
</div>

          
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Information</h3>
            <p className="text-lg text-gray-700 mb-2"><span className="font-bold">Name:</span> {job.company.name}</p>
            <p className="text-lg text-gray-700 mb-4">{job.company.description}</p>
            <p className="text-lg text-gray-700 mb-2"><span className="font-bold">Email:</span> {job.company.contactEmail}</p>
            <p className="text-lg text-gray-700 mb-4"><span className="font-bold">Phone:</span> {job.company.contactPhone}</p>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{job.title}</h2>
            <div className="text-lg text-gray-600 mb-4">
              <span className="font-bold">Type:</span> {job.type}
            </div>
            <div className="text-lg text-gray-600 mb-4">
              <span className="font-bold">Location:</span> {job.location}
            </div>
            <div className="text-lg text-gray-600 mb-4">
              <span className="font-bold">Salary:</span> {job.salary}
            </div>
            <p className="text-gray-700">{job.description}</p>
          </div>
        </div>
      
        </div>) : (
        <p className="text-center text-gray-600 mb-2">Job not found. <br />
        <div className="flex justify-center h-screen items-center">
          <GridLoader></GridLoader>
        </div>
        </p>
        
      )}
    </div>
    <ViewAllJobs />
  </div>
);
};

// Fetching data using Router Loader
const jobLoader = async ({ params }) => {
const res = await fetch(`/api/jobs/${params.id}`);
const data = await res.json();
return data;
}




export { JobPage as default, jobLoader };