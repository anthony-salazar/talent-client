import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RouteConstants from './routeConstants';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path={RouteConstants.Home} element={<HomePage/>}/>
         <Route path={RouteConstants.Login} element={<LoginPage/>}/>
         <Route path={RouteConstants.Register} element={<RegisterPage/>}/>
         <Route path="*" element={<NotFoundPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
