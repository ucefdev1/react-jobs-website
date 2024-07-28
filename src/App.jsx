import Navbar from "./assets/componenets/Navbar";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Hero from "./assets/componenets/Hero";
import CardsHome from "./assets/componenets/CardsHome";
import JobsListings from "./assets/componenets/JobsListings";
import ViewAllJobs from "./assets/componenets/ViewAllJobs";

const App = () => {
  
  return (
    <div >
      <Navbar></Navbar>
      <Hero title="Become a Laravel/React Dev" subTitle="Find All projects that feed your skills"></Hero>
      <CardsHome></CardsHome>
      <JobsListings></JobsListings>
      <ViewAllJobs></ViewAllJobs>
    </div>
  )
}

export default App