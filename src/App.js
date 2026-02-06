import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a sample React application For Test Purpose.
        </p>
        <a
          className="App-link"
          href="https://www.geminisolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Gemini Solutions!
        </a>
      </header>
    </div>
  );
}

export default App;
