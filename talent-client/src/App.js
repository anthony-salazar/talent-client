import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Shared/LoginPage.jsx';
import RegisterPage from './pages/Shared/RegisterPage.jsx';
import RouteConstants from './routeConstants';
import HomePage from './pages/Shared/HomePage.jsx';
import NotFoundPage from './pages/Shared/NotFoundPage.jsx';
import JobSearchPage from './pages/Shared/JobSearchPage.jsx';
import ApplicationFormPage from './pages/Candidate/ApplicationFormPage.jsx';
import JobUpdate from './components/JobUpdate.jsx';
import ManageUsersPage from './pages/Admin/ManageUsersPage.jsx';
import ManageAppsPage from './pages/Admin/ManageAppsPage.jsx';
import ManageJobsPage from './pages/Admin/ManageJobsPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path={RouteConstants.Home} element={<HomePage/>}/>
         <Route path={RouteConstants.Login} element={<LoginPage/>}/>
         <Route path={RouteConstants.Register} element={<RegisterPage/>}/>
         <Route path={RouteConstants.JobSearch} element={<JobSearchPage />}/>
         <Route path={RouteConstants.PostJob} element={<JobUpdate/>}/>
         <Route path={RouteConstants.ManageUsers} element={<ManageUsersPage/>}/>
         <Route path={RouteConstants.ManageApps} element={<ManageAppsPage/>}/>
         <Route path={RouteConstants.ManageJobs} element={<ManageJobsPage/>}/>


         <Route path={RouteConstants.ApplyJob} element={<ApplicationFormPage/>}/>
         <Route path="*" element={<NotFoundPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
