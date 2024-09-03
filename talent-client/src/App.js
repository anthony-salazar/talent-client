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
import JobDetails from './pages/Shared/JobDetails.jsx';
import ManageUsersPage from './pages/Admin/ManageUsersPage.jsx';
import ManageAppsPage from './pages/Admin/ManageAppsPage.jsx';
import ManageJobsPage from './pages/Admin/ManageJobsPage.jsx';
import AdminDash from './pages/Admin/AdminDash.jsx';
import CandidateDash from './pages/Candidate/CandidateDash.jsx';
import ManagerDash from './pages/Manager/ManagerDash.jsx';
import PrivateRoutes from './privateRoutes.js';
import NoAccessPage from './pages/Shared/NoAccessPage.jsx';
import { useState } from 'react';

function App() {
  const [userType, setUserType] = useState('')
  return (
    <div className="App">
      <Routes>
         <Route path={RouteConstants.Home} element={<HomePage/>}/>
         <Route path={RouteConstants.Login} element={<LoginPage setUserType={setUserType}/>}/>
         <Route path={RouteConstants.Register} element={<RegisterPage/>}/>
         <Route path={RouteConstants.JobSearch} element={<JobSearchPage />}/>
         <Route path={RouteConstants.PostJob} element={<JobUpdate/>}/>
         <Route path={RouteConstants.NoAccess} element={<NoAccessPage/>} />

         <Route element={<PrivateRoutes requiredUserType="admin" />}>
          <Route path={RouteConstants.ManageUsers} element={<ManageUsersPage/>}/>
          <Route path={RouteConstants.ManageApps} element={<ManageAppsPage/>}/>
          <Route path={RouteConstants.ManageJobs} element={<ManageJobsPage/>}/>
         </Route>

         <Route path={RouteConstants.CandidateDashboard} element={<CandidateDash/>}/>
         <Route path={RouteConstants.ManagerDashboard} element={<ManagerDash/>}/>
         <Route path={RouteConstants.ApplyJob} element={<ApplicationFormPage/>}/>
         <Route path="*" element={<NotFoundPage/>}/>
         <Route path={RouteConstants.AdminDashboard} element={<AdminDash/>} />

       </Routes>
    </div>
  );
}

export default App;
