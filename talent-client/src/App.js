import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/contact' />
       </Routes>
    </div>
  );
}

export default App;
