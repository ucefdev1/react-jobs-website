import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const getNavLinkClass = (isActive) => {
    return isActive
      ? 'bg-gray-200 p-3 rounded-md hover:bg-white hover:cursor-pointer text-black font-bold h-full border-b-4 border-blue-500'
      : 'bg-gray-200 p-3 rounded-md hover:bg-white hover:cursor-pointer text-black font-bold h-full';
  };

  return (
    <div className="bg-gray-800 mx-auto flex flex-row items-center justify-between p-5">
      <a href="/" className="text-white text-3xl font-bold">UCEF JOBS</a>
      <div className="flex flex-row space-x-3 items-center">
        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
        <NavLink to="/jobs" className={({ isActive }) => getNavLinkClass(isActive)}>Jobs</NavLink>
        <NavLink to="/add-job" className={({ isActive }) => getNavLinkClass(isActive)}>Add Job</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
