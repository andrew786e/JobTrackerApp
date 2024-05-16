import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { AvailableJobsPage } from './pages/AvailableJobsPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {

  const router = createBrowserRouter([
    {
      path : "/" ,
      element: <HomePage/>
    }, 
    {
      path: "/CompanyInformation" ,
      element: <AvailableJobsPage/>
    },
    {
      path: "/Login",
      element: <LoginPage/>
    }
  ]) ;
  
  return (
    <><RouterProvider router={router} /></>
  );
}

export default App;
