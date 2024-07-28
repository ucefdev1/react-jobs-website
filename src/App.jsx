import Navbar from "./assets/componenets/Navbar";
import Hero from "./assets/componenets/Hero";
import CardsHome from "./assets/componenets/CardsHome";
import JobsListings from "./assets/componenets/JobsListings";

const App = () => {
  
  return (
    <div >
      <Navbar></Navbar>
      <Hero title="Become a Laravel/React Dev" subTitle="Find All projects that feed your skills"></Hero>
      <CardsHome></CardsHome>
      <JobsListings></JobsListings>
    

    </div>
  )
}

export default App