import Navbar from "../componenets/Navbar"
import Hero from "../componenets/Hero"
import CardsHome from "../componenets/CardsHome"
import JobsListings from "../componenets/JobsListings"
import ViewAllJobs from "../componenets/ViewAllJobs"

const HomePage = () => {
  return (
    <div >
    <Hero title="Become a Laravel/React Dev" subTitle="Find All projects that feed your skills"/>
    <CardsHome/>
    <JobsListings isHome="true"/>
    <ViewAllJobs/>
  </div>
  )
}

export default HomePage