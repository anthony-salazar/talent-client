import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import JobApplicantSearchPage from './pages/Manager/JobApplicantSearchPage.jsx'
import ManagerJobsPage from './pages/Shared/ManagerJobsPage.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [specificUser, setSpecificUser] = useState({name: '', type: ''})
  const [user, setUser] = useState({name: '', type: ''})
  const navigate = useNavigate()
  const logOutUser = () => {
    setUser({name: '', type: ''})
    setSpecificUser({name: '', type: ''})
  }
  return (
    <div className="App">
      <Routes>
        <Route path={RouteConstants.Home} element={<HomePage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
        <Route path={RouteConstants.Login} element={<LoginPage setUser={setUser} setSpecificUser={setSpecificUser}/>}/>
        <Route path={RouteConstants.Register} element={<RegisterPage/>}/>
        <Route path={RouteConstants.JobSearch} element={<JobSearchPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
        <Route path={RouteConstants.NoAccess} element={<NoAccessPage user={user} specificUser={specificUser} logOut={logOutUser}/>} />
        <Route path="*" element={<NotFoundPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>


        <Route element={<PrivateRoutes requiredUserType={["Administrator"]} userType={user.type} />}>
          <Route path={RouteConstants.ManageUsers} element={<ManageUsersPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/> {/*only admin */}
          <Route path={RouteConstants.ManageApps} element={<ManageAppsPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/> {/*only admin */}
          <Route path={RouteConstants.AdminDashboard} element={<AdminDash user={user} specificUser={specificUser} logOut={logOutUser}/>} /> {/*admin*/}
          <Route path={RouteConstants.ManageJobs} element={<ManageJobsPage user={user} specificUser={specificUser} logOut={logOutUser}/>} /> {/*admin*/}
        </Route>

        <Route element={<PrivateRoutes requiredUserType={["Administrator", "Candidate"]} userType={user.type} />}>
          <Route path={RouteConstants.ApplyJob} element={<ApplicationFormPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/> {/*candidate*/}
          <Route path={RouteConstants.CandidateDashboard} element={<CandidateDash user={user} specificUser={specificUser} logOut={logOutUser}/>}/> {/*candidate */}
        </Route>
        <Route element={<PrivateRoutes requiredUserType={["Administrator", "Hiring_Manager"]} userType={user.type} />}>
          {/* <Route path={RouteConstants.PostJob} element={<JobUpdate user={user} specificUser={specificUser} logOut={logOutUser}/>}/>  */}
          <Route path={RouteConstants.ManageJobs} element={<ManageJobsPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
          <Route path={RouteConstants.JobApplicantSearchPage} element={<JobApplicantSearchPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
          <Route path={RouteConstants.ManagerDashboard} element={<ManagerDash user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
          <Route path={RouteConstants.ManageMyJobs} element={<ManagerJobsPage user={user} specificUser={specificUser} logOut={logOutUser}/>}/>
        </Route>
       </Routes>
    </div>
  );
}

export default App;
