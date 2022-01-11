class App extends React.Component {
  constructor(props) {
    super(props);

this.state={
  runningDisplay: "",
  currentDisplay: "0",
  operation: ""
}
this.handleOne=this.handleOne.bind(this)
this.handleTwo=this.handleTwo.bind(this)
this.handleThree=this.handleThree.bind(this)
this.handleEquals=this.handleEquals.bind(this)
this.handlePlus=this.handlePlus.bind(this)
  }

  handleOne(event) {
    this.setState(state => ({
      runningDisplay: state.currentDisplay,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleTwo(event) {
    this.setState(state => ({
      runningDisplay: state.currentDisplay + event.target.value,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleThree(event) {
    this.setState(state => ({
      runningDisplay: state.currentDisplay + event.target.value,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handlePlus(event) {
    this.setState(state => ({
      runningDisplay: state.currentDisplay + event.target.value,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }

  handleEquals(){
    console.log(eval(this.state.operation))
    this.setState(state => ({
      operation: ""
    }));
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
      <button id="plus" value="+" onClick={this.handlePlus}>+</button>
      <button id="equals" onClick={this.handleEquals}>=
      </button>
      </div>
      );
    }
  }

















  ReactDOM.render(<App />, document.getElementById("app"))