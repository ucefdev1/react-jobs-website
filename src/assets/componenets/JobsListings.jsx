import jobs from '../jobs.json'

const JobsListings = () => {

  return (
    <div className="container mx-auto">
        <div className="flex flex-row justify-center p-6 text-center font-bold text-black text-5xl">
            Last Jobs
        </div>
        {
            jobs.map((job)=>
            (<div className="container p-3 mx-auto">
                <div className= " flex flex-col mb-8 bg-gray-100  justify-between space-y-3  w-full  min-h-[200px]  shadow-lg rounded-md p-6">
                    <div className="flex flex-row justify-between">
                    <h2 className="font-bold flex-1 text-3xl">{job.title}</h2>
                    <div className="text-sm bg-black text-white items-center rounded-md p-3">{job.type}</div>
                    </div>
                    <h5 className="text-sm">{job.description}</h5>
                    <div className="flex flex-row justify-center space-x-3">
                    <div className="text-sm rounded-md bg-blue-300 p-3 text-white max-w-[25%]">{job.salary}</div>
                    <div className="text-sm p-2 rounded-md bg-red-500 text-white max-w-[25%]">{job.location}</div>
                    </div>
                    <a href={`/job/${job.id}`} className="rounded-md p-3 max-w-[20%] self-center text-center w-full min-h-[30px] font-bold text-white bg-gray-950 hover:bg-gray-300 hover:text-black hover:cursor-pointer">dkjdj</a>
                </div>
                </div>)
        )
        }
       
    </div>
  )
}

export default JobsListings