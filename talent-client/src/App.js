import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div className="App">
      <LoginComponent />
      <HeaderComponent />
      <div>
        <h2>Home Page</h2>
        <p>This is the "Home" page!

    This application provides a "partial" solution
    that users can use to get started on building
    their own full-fledged Talent Management system.

    The application also includes source code that
    can be used as an example for building out the
    rest of the application.

    This REACT based front-end works along with the
    Talent back-end REST API which is also a "partial"
    solution that needs to be built-out.

    The system accepts logins from three types of users:
    - Administrator
    - Hiring_Manager
    - Candidate

    In addition, Guests can use limited functionality
    without having to log in.

    Before you start your work you should become familiar
    with the front-end user interface and the back-end API
    , their code and the techniques being used.</p>
      </div>
      <FooterComponent />
=======
import JobSearch from './component/JobSearch';
import list from './jobList.json';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JobSearch jobs={list} />
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
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
