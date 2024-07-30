
import  {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

import HomePage from './assets/pages/HomePage';
import MainLayout from './assets/layouts/MainLayout';
import Jobs from './assets/pages/Jobs';
import NotFound from './assets/pages/NotFound';
import JobPage, {jobLoader} from './assets/pages/JobPage';
import AddJob from './assets/pages/AddJob';
import { toast } from 'react-toastify';
import EditJobPage from './assets/pages/EditJobPage';




const App = () => {


  // Add job
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs',{
    method: 'POST',
    headers: {
      'Content-Type': 'applictaion/json'
    },
    body: JSON.stringify(newJob)
  });
  toast.success('Job Added succefully');
  return
}
  
// delete Job
const deleteJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'applictaion/json'
    },
    body: JSON.stringify(newJob)
  });
  return
}



// update job
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element = {<MainLayout/> }>
      <Route index element= { <HomePage/> }/>
      <Route path='jobs' element= { <Jobs/> }/>
      <Route path='*' element= { <NotFound/> }/>
      <Route path='jobs/:id'  element= { <JobPage deleteJob={deleteJob} /> } loader={ jobLoader }/>
      <Route path='edit-job/:id'  element= { <EditJobPage updateJobSubmit={updateJob}/> } loader={ jobLoader }/>
      <Route path='add-job' element= { <AddJob addJobSubmit={addJob}/> } />
     </Route>

     
)

)

  return (
    <RouterProvider router={router}/>
  )
}

export default App