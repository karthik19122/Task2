import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdate: '',
      age: null,
    };
  }

  handleBirthdateChange = (e) => {
    this.setState({
      birthdate: e.target.value,
    });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    this.setState({
      age,
    });
  };

  render() {
    return (
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <label htmlFor="birthdate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthdate"
          value={this.state.birthdate}
          onChange={this.handleBirthdateChange}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years old</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
