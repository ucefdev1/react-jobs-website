import { Link } from "react-router-dom"


const Cart = ({bg='bg-gray-100',title,desc,buttonContent}) => {
  return (
    <div className="flex justify-center">
        <div className= {`${bg} flex flex-col space-y-3 text-center justify-between  w-full  min-h-[200px]  shadow-lg rounded-md p-6`}>
            <h2 className="font-bold text-3xl">{title}</h2>
            <h5>{desc}</h5>
            <Link to="/jobs" className="w-1/4 rounded-md p-3 self-center text-center min-h-[30px] font-bold text-white bg-gray-950 hover:bg-gray-300 hover:text-black hover:cursor-pointer">{buttonContent}</Link>
        </div>
    </div>
  )
}

export default Cart