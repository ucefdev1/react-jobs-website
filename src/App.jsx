
import  {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

import HomePage from './assets/pages/HomePage';
import MainLayout from './assets/layouts/MainLayout';
import Jobs from './assets/pages/Jobs';
import NotFound from './assets/pages/NotFound';

const App = () => {
  
const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element = {<MainLayout/> }>
      <Route index element= { <HomePage/> }/>
      <Route path='jobs' element= { <Jobs/> }/>
      <Route path='*' element= { <NotFound/> }/>
     </Route>

     
)

)

  return (
    <RouterProvider router={router}/>
  )
}

export default App