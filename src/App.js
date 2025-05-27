import logo from './logo.svg';
import './App.css';

function App() {
  
  const handleFacebookClick = () => {
    window.location.href = "https://facebook.com";
  };

  return (
    <div>
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
        <button className="App-button" onClick={() => window.location.href = "https://github.com"}>
          CLICK ME
        </button>
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleFacebookClick}>
          CLICK ME
        </button>
        <button className="App-button">
          CLICK ME
        </button>
        <button className="App-button">
          CLICK ME
        </button>
        <p>
          This is a simple React application.
        </p>
        <p>
          It is designed to demonstrate the use of React components and styling.
        </p>
        <p>
          You can modify this code to create your own React application.
        </p>
        <p>
          This is a simple addition to the original code.
        </p>
        <p>
          You can add more features and components as needed.
        </p>
        <p>
          This is a simple addition to the original code.
        </p>
      </header>
      <div>
        <h2>Clickable Button Example</h2>
          <ClickableButton title={"hola"}/>
          <ClickableButton title={"mundo"}/>
          <ClickableButton title={"HERE"}/>
          <ClickableButton title={"HERE"}/>
          <ClickableButton title={"HERE"}/>
      </div>
    </div>
  );
}

function ClickableButton({title}) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <>
      <img src={require('./imagenes/images-3.jpeg')} alt="Example" style={{ display: 'block', marginBottom: '10px' }} />
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default App;
