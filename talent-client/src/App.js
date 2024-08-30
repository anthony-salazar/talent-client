import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import LoginComponent from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' />
         <Route path='/about' />
         <Route path='/contact' />
       </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
