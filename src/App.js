import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () =>
  {
    const names = ['Bob', 'Fatima', 'ABC'];
    const int = Math.floor (Math.random() * 3);
    return names[int];

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to see what I change.
        </p> */}
       
       <h3>
        Hello {handleNameChange()} ! 
       </h3>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <p>
       {name}
      </p> */}
      </header>
     
    </div>
  );
}

export default App;
