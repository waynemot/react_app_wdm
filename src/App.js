import React, { useState } from 'react';
import n_logo from './Nebraska_N_RGB.svg';
import './App.css';
import styled from 'styled-components';
var zxcvbn = require('zxcvbn');


const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

function App() {
  const inputProps = useInput();
  return (
    <div className="PwdGen">
      <header className="App-header">
        <img src={n_logo} className="App-logo" alt="logo" />
        <p>
        <StyledInput 
          {...inputProps}
          placeholder="Type in here"
        />
        </p>
        <span>Value: {inputProps.value} </span>
        <p>
          <span>Result:</span>
          <span></span>
        </p>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Reload
        </a>
      </header>
    </div>
  );
}

export default App;
