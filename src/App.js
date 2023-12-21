import logo from './logo.svg';
import './App.css';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter base="/accueil">
      <div className="App">
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
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
            Learn React
          </a>
        </header>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </div>
    </HashRouter>
  );
}

export default App;
