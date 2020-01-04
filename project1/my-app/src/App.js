import React from 'react';
import './App.css';
import Comic from './Comic.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Calculator />
      </header>
    </div>
  );
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstvalue: '__',
            secondvalue: '__',
            sum: null
        };
      }
    render() {
        return (
        <form onSubmit={(event) => this.stopNormalSubmission(event) }>
            <p>
                <input className="myinput" onInput={(event) => this.setState({firstvalue: parseInt(event.target.value)})}/>
                <input className="myinput" onInput={(event) => this.setState({secondvalue: parseInt(event.target.value)})}/>
            </p>
            <p>
                <button className="mybutton">
                Calculate!
                </button>
            </p>
            <p>The sum of {this.state.firstvalue} and {this.state.secondvalue} is: {this.state.sum}</p>
            <Comic />
        </form>
        );
    }

    stopNormalSubmission(event) {
        event.preventDefault();
        this.setState({sum: this.state.firstvalue + this.state.secondvalue});
    }
}

export default App;

//TODO: Clear input value when click calculate
//TODO: Check validation, only numbers, show error message if not numbers
//TODO: Style input boxes and result into an equation format