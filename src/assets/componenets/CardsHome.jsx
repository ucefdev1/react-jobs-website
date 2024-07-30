import Cart from "./Cart"

const CardsHome = () => {
  return (
<div className='flex justify-center items-center p-5 bg-white text-black '>
      <Cart
        bg="bg-gray-200"
        title="For Developers"
        buttonContent="Start Now"
        desc="Discover exciting opportunities in React and Laravel development, connect with top companies, and grow your career."
      />
    </div>
  )
}

export default CardsHome