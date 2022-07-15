import React, { useState, Component } from 'react';
import n_logo from './Nebraska_N_RGB.svg';
import './App.css';
import styled from 'styled-components';
//var zxcvbn = require('zxcvbn');
import zxcvbn from 'zxcvbn';
import PwdMeter from './PwdMeter';
import RandPwd from "./RandPwd";


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

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    }
  }

  render() {
    const { password } = this.state;
    return (
      <div className="App">
        <div className="PwdGen">
          <header className="App-header">
            <img src={n_logo} className="App-logo" alt="logo" />
          </header>
          <p>
            <RandPwd />
          </p>
          <p>
            <label>Test a password: </label>
            <input autoComplete="off" type="password" placeholder="Type here..." onChange={e => this.setState({ password: e.target.value })}/>
          </p>
          <span>Value: {password} </span>

          <div className="meter">
            <PwdMeter password={password} />
          </div>
        </div>
      </div>
    );
  }

}

// eslint-disable-next-line no-unused-vars
function ZApp() {
  const inputProps = useInput();
  var res = zxcvbn("ishkabbible1");
  return (
    <div className="PwdGen">
      <header className="App-header">
        <img src={n_logo} className="App-logo" alt="logo" />
      </header>
      <p>
        <span>Result:  </span>
        <PwdMeter />
      </p>
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Reload
      </a>

    </div>
  );
}

export default App;
