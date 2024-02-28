import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  // React Element => Object ==> { HTML Browser  Readable context} 
  // Babel transpiles react code to React Element which transforms the code to React HTML :-> HTML element(render)


  //jSX code Much Cleaner code.
    function handleClick(){
      // setShowMessage(true); // Update state to show the message
      console.log(showMessage);
      setShowMessage(prevShowMessage => !prevShowMessage); // Toggle the state
    // React component=> every thing is component in react:
  }

  // Testing Component inside Component;
  //Title is functional component since Component name is Capital & it's functional call :
  const Title =() =>{
    return(
    <h1 className='head' tabIndex={3}>
      this is going to be rendered somewhere else
    </h1>
  );
}

  const data =10000;

  //* React Element
  const heading = (
    <h1 clasName ="head" tabIndex={4}>
      Namaste React using JSX ..
    </h1>
  )
  
  const Heading = () =>{
    //Important
 const [count, setCount] = useState(0)

 const handleClick = () => {
  setCount(count + 1);  
  }
  return (
  <div>
    
    <button onClick={handleClick}>
    Increment
    </button>
         {/* Rendering Inside COmponent based COmponent */}
         {/* {Rendering the Title below} */}
         {data}
      <Title/>
    <p>
        Count : {count}
    </p>
  </div>
  );
};


  return (
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
          Learn React
        </a>
        <button 
        onClick={handleClick}>
          Click me to see the magic
        </button>
        {showMessage && <div>Hi I Learning  react</div>}
        <Heading/>
      </header>
    </div>
  );

}

export default App;
