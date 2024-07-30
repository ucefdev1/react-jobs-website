
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




const App = () => {

  
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs',{
    method: 'POST',
    headers: {
      'Content-Type': 'applictaion/json'
    },
    body: JSON.stringify(newJob)
  });
  return
}
  
const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element = {<MainLayout/> }>
      <Route index element= { <HomePage/> }/>
      <Route path='jobs' element= { <Jobs/> }/>
      <Route path='*' element= { <NotFound/> }/>
      <Route path='jobs/:id'  element= { <JobPage /> } loader={ jobLoader }/>
      <Route path='add-job' element= { <AddJob addJobSubmit={addJob}/> } />
     </Route>

     
)

)

  return (
    <RouterProvider router={router}/>
  )
}

export default App