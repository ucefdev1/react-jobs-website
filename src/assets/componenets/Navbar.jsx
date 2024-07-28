const Navbar = () => {
    return (
      <div className="bg-gray-800 mx-auto flex flex-row items-center justify-between p-5">
        <h3 className=" text-white text-3xl font-bold">UCEF JOBS</h3>
        <div className="flex flex-row space-x-3 items-center">
        <div className=" bg-gray-200 p-3 rounded-md hover:bg-white hover:cursor-pointer text-black font-bold h-full">Home</div>
        <div className=" bg-gray-200 p-3 rounded-md hover:bg-white hover:cursor-pointer text-black font-bold h-full">Jobs</div>
        <div className=" bg-gray-200 p-3 rounded-md hover:bg-white hover:cursor-pointer text-black font-bold h-full">Add Job</div>
        </div>

      </div>
    )
  }
  
  export default Navbar