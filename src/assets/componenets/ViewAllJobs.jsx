import {Link} from 'react-router-dom'

function ViewAllJobs() {
  return (
    <div className="flex flex-row min-h-1 p-4 bg-gray-400 min-h-[250px] items-center justify-center">
                    <Link to='/jobs' className="w-1/4 rounded-md p-3  text-center  font-bold text-black bg-gray-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer">View All</Link>
    </div>
  )
}

export default ViewAllJobs