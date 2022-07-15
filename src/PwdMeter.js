
import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import './PwdMeter.css';

class PwdMeter extends Component {
    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
        return (
            <div className="password-strength-meter">
        <progress
          value={testedResult.score}
          max="4"
        />
        <br />
        <label
          className="password-strength-meter-label"
        >
          {password && (
            <>
              <strong>Password strength:</strong> {this.createPasswordLabel(testedResult)}
            </>
          )}
        </label>
      </div>
        );
      }

      createPasswordLabel = (result) => {
        switch (result.score) {
          case 0:
            return 'Weak';
          case 1:
            return 'Weak';
          case 2:
            return 'Fair';
          case 3:
            return 'Good';
          case 4:
            return 'Strong';
          default:
            return 'Weak';
        }
      }
}

export default PwdMeter;