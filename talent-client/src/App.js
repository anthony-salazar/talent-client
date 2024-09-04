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
import AdminDash from './pages/Admin/AdminDash.jsx';
import CandidateDash from './pages/Candidate/CandidateDash.jsx';
import ManagerDash from './pages/Manager/ManagerDash.jsx';
import PrivateRoutes from './privateRoutes.js';
import NoAccessPage from './pages/Shared/NoAccessPage.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [userType, setUserType] = useState('')
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({name: username, type: userType})
  useEffect(() => {if (userType && username) {
      setUser({name: username, type: userType})
    } else {
      setUser({name: '', type: ''})
    }}, [userType, username]);
  return (
    <div className="App">
      <Routes>
         <Route path={RouteConstants.Home} element={<HomePage user={user}/>}/>
         <Route path={RouteConstants.Login} element={<LoginPage setUsername={setUsername} setUserType={setUserType}/>}/>
         <Route path={RouteConstants.Register} element={<RegisterPage/>}/>
         <Route path={RouteConstants.JobSearch} element={<JobSearchPage user={user}/>}/>
         <Route path={RouteConstants.PostJob} element={<JobUpdate user={user}/>}/>
         <Route path={RouteConstants.NoAccess} element={<NoAccessPage user={user}/>} />

         <Route element={<PrivateRoutes requiredUserType="Administrator" userType={userType} />}>
          <Route path={RouteConstants.ManageUsers} element={<ManageUsersPage user={user}/>}/>
          <Route path={RouteConstants.ManageApps} element={<ManageAppsPage user={user}/>}/>
          <Route path={RouteConstants.ManageJobs} element={<ManageJobsPage user={user}/>}/>
         </Route>

         <Route path={RouteConstants.CandidateDashboard} element={<CandidateDash user={user}/>}/>
         <Route path={RouteConstants.ManagerDashboard} element={<ManagerDash user={user}/>}/>
         <Route path={RouteConstants.ApplyJob} element={<ApplicationFormPage user={user}/>}/>
         <Route path="*" element={<NotFoundPage user={user}/>}/>
         <Route path={RouteConstants.AdminDashboard} element={<AdminDash user={user}/>} />

       </Routes>
    </div>
  );
}

export default App;
