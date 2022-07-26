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
  width: 3em;
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
      tpass: '',
    }
  }

  render() {
    const { tpass } = this.state;
    const {pw_length } = this.state;
    const { up_first } = this.state;
    const { up_any } = this.state;
    const { spec_char } = this.state;
    const { add_num } = this.state;
    const { pw_count } = this.state;
    const { do_something } = this.state;
    if(do_something) {
      RandPwd.build_gen(pw_count, pw_length, up_first, add_num, spec_char, up_any)
    }

    return (
      <div className="App">
        <div className="PwdGen">
          <header className="App-header">
            <img src={n_logo} className="App-logo" alt="logo" />
          </header>
          <table>
            <thead>
              <tr>
                <th colSpan="2" width="50%">
                  Options
              </th>
              <th width='50%'>
                  Generative
                </th>
              </tr></thead>
            <tbody>
              <tr>
                <td>
                  <label>Length: </label>
                </td>
                <td>
                  <StyledInput onChange={e => this.setState({ pw_length: e.target.value })}/>
                </td>
                <td rowSpan='7' className='generative'>
                  <div ref="gen_result"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Count: </label>
                </td>
                <td>
                  <StyledInput onChange={e => this.setState({ pw_count: e.target.value })}/>
                </td>
              </tr>
              <tr>
                <td><label>Upcase First: </label></td>
                <td><input type='checkbox' onChange={e => this.setState({ up_first: e.target.value })}></input></td>
              </tr>
              <tr>
                <td><label>Upcase Any: </label></td>
                <td><input type='checkbox' onChange={e => this.setState({ up_any: e.target.value})}></input></td>
              </tr>
              <tr>
                <td><label>Special Character: </label></td>
                <td><input type='checkbox' onChange={e => this.setState({ spec_char: e.target.value})}></input></td>
              </tr>
              <tr>
                <td><label>Add  Numeric: </label></td>
                <td><input type='checkbox' onChange={e => this.setState({ add_num: e.target.value})}></input></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button onClick={e => this.setState({do_something: "1"})}>Click Me</button>
                </td>
              </tr>
            </tbody>
          </table>

          <RandPwd />

          <p>
            <label>Test a password: </label>
            <input autoComplete="off" type="text" placeholder="Type here..." onChange={e => this.setState({ tpass: e.target.value })}/>
          </p>

          <div className="meter">
            <PwdMeter password={tpass} />
          </div>
        </div>
        <div><hr/></div>
      </div>
    );
  }

}

export default App;

