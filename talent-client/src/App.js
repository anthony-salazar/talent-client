import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' />
         <Route path='/about' />
         <Route path='/contact' />
       </Routes>
    </div>
  );
}

export default App;
