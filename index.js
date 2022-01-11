class App extends React.Component {
  constructor(props) {
    super(props);

this.state={
  inputs: [],
  defaultDisplay: "0",
  runningDisplay: "",
  currentDisplay: "",
  operation: ""
}
this.handleOne=this.handleOne.bind(this)
this.handleTwo=this.handleTwo.bind(this)
this.handleThree=this.handleThree.bind(this)
this.handleFour=this.handleThree.bind(this)
this.handleFive=this.handleThree.bind(this)
this.handleSix=this.handleSix.bind(this)
this.handleSeven=this.handleSeven.bind(this)
this.handleEight=this.handleEight.bind(this)
this.handleNine=this.handleNine.bind(this)
this.handleEquals=this.handleEquals.bind(this)
this.handlePlus=this.handlePlus.bind(this)
this.handleMinus=this.handleMinus.bind(this)
this.handleMultiply=this.handleMultiply.bind(this)
this.handleDivide=this.handleDivide.bind(this)
this.handleClear=this.handleClear.bind(this)
  }

  handleOne(event) {
      this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value,
    }));
  }

  handleTwo(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleThree(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleFour(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleFive(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleSix(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleSeven(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleEight(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
  
  handleNine(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handlePlus(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }


  handleMinus(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleMultiply(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleDivide(event) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleEquals(){
   let answer = eval(this.state.operation)
   console.log(answer)
    this.setState(state => ({
     currentDisplay: answer,
     operation: answer,
     runningDisplay: state.runningDisplay+answer
    }));
  }

  handleClear() {
    this.setState({
      inputs: [],
  defaultDisplay: "0",
  runningDisplay: "",
  currentDisplay: "",
  operation: ""
    });
  }

  render() {
    return (
      <div>  
      <h1>{this.state.runningDisplay}</h1>
      <h1>{this.state.currentDisplay}</h1>
      <button id="one" value="1" onClick={this.handleOne}>
        1
      </button>
      <button id="two" value="2" onClick={this.handleTwo}>
        2
      </button>
      <button id="three" value="3" onClick={this.handleThree}>
        3
      </button>
      <button id="four" value="4" onClick={this.handleFour}>
        4
      </button>
      <button id="five" value="5" onClick={this.handleFive}>
        5
      </button>
      <button id="six" value="6" onClick={this.handleSix}>
        6
      </button>
      <button id="seven" value="7" onClick={this.handleSeven}>
        7
      </button>
      <button id="eight" value="8" onClick={this.handleEight}>
        8
      </button>
      <button id="nine" value="9" onClick={this.handleNine}>
        9
      </button>
      <button id="plus" value="+" onClick={this.handlePlus}>+</button>
      <button id="minus" value="-" onClick={this.handleMinus}>-</button>
      <button id="divide" value="/" onClick={this.handleDivide}>/</button>
      <button id="multiply" value="*" onClick={this.handleMultiply}>*</button>
      <button id="equals" onClick={this.handleEquals}>=</button>
      <button id="clear" onClick={this.handleClear}>Clear All</button>
      </div>
      );
    }
  }

















  ReactDOM.render(<App />, document.getElementById("app"))