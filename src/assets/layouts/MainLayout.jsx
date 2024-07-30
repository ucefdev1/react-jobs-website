import { Outlet } from 'react-router-dom';
import Navbar from '../componenets/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../componenets/Footer';


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout