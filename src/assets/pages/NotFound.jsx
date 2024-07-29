
import {Link} from 'react-router-dom'
import notFoundImage from "../images/404.svg"

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-400 p-6">
        <img src={notFoundImage} className='max-h-[200px]' alt="" />
        <Link to="/" className='mt-6 py-3 px-7 font-bold rounded-full shadow-2xl bg-white text-gray-700 hover:text-white hover:bg-black'>Go Back</Link>
    </div>
  )
}

export default NotFound