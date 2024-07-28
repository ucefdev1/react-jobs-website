import Cart from "./Cart"

const CardsHome = () => {
  return (
    <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white text-black'>
        <Cart bg="bg-gray-200" title="For Developers" buttonContent="Start" desc="Discover exciting opportunities in React and Laravel development, connect with top companies, and grow your career." />
        <Cart bg="bg-gray-200" title="For Employers" buttonContent="Add Job" desc="Find talented React and Laravel developers to join your team, streamline your hiring process, and build your dream project." />
       
    </div>
  )
}

export default CardsHome