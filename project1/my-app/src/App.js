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

function NumberInput(props) {
    return (
        <input className="myinput" type='number' value={props.value} onChange={props.onInputChange}/>
    )
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array(2).fill(''),
            sum: null
        };
      }
    render() {
        return (
        <form onSubmit={(event) => this.stopNormalSubmission(event) }>
            <div className='equation'>
                <NumberInput value={this.state.numbers[0]} onInputChange={(event) => this.handleChange(event.target.value, 0)}/>
                <span>+</span>
                <NumberInput value={this.state.numbers[1]} onInputChange={(event) => this.handleChange(event.target.value, 1)}/>
                <span>=</span>
                <span className='sum'>{this.state.sum}</span>
            </div>
            <p>
                <button className="mybutton">
                    Calculate!
                </button>
            </p>
            <Comic />
        </form>
        );
    }

    stopNormalSubmission(event) {
        event.preventDefault();
        this.setState({sum: this.state.numbers[0] + this.state.numbers[1]});
    }

    handleChange(inputvalue, inputboxnumber) {
        if (/^\d+$/.test(inputvalue)) {
            let localnumbers = this.state.numbers.slice();
            localnumbers[inputboxnumber] = parseInt(inputvalue);
            this.setState({numbers: localnumbers, sum: null});
        }
    }
}

export default App;