import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { Link } from 'react-router-dom';



import { useState } from "react";

const Job = ({ job }) => {
   const [showFullDesc,setShowFullDesc] = useState(false)

  let description = job.description;

  if(!showFullDesc){
    description = description.substring(0,100) + '...';
  }

    return (
      <div className="flex flex-col mb-8 bg-white border border-gray-300 shadow-lg rounded-lg p-6">
        
        <div className="flex justify-between items-start mb-4">
          <h2 className="font-bold text-2xl text-gray-800 leading-tight">
            {job.title}
          </h2>
          <div className="text-sm bg-black text-white rounded-md px-3 py-1 flex items-center">
            {job.type}
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <button onClick={ ()=> setShowFullDesc((prev)=>(!prev)) } className="text-left text-blue-800 mb-5" >{ !showFullDesc ? 'More...' : 'Less' }</button>
        <div className="flex space-x-2  justify-between items-center mt-auto">
          <div className="text-sm bg-blue-500 text-white rounded-md px-4 py-2">
          <FaMoneyBill className="inline-block mr-1" />
          {job.salary}
          </div>
          <div className="text-sm bg-red-500 text-white rounded-md px-4 py-2">
          <FaLocationDot  className="inline-block mr-1"/>{job.location}</div>
        </div>
        <Link to={`/jobs/${job.id}`} className="block text-center text-white bg-gray-900 hover:bg-gray-700 rounded-md py-3 font-semibold mt-4 transition duration-300">
        <VscDebugStart className="inline-block mr-2 text-xl"/>
        {'Apply Now'}
        </Link>
      </div>
    );
  }
  
  export default Job;
  