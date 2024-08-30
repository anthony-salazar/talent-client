import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import JobSearchPage from './pages/JobSearchPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/register' element={<RegisterPage/>}/>
         <Route path='/jobsearch' element={<JobSearchPage />}/>
       </Routes>
    </div>
  );
}

export default App;
