class App extends React.Component {
  constructor(props) {
    super(props);

this.state={
  inputs: [],
  defaultDisplay: "0",
  runningDisplay: "",
  currentDisplay: "",
  operation: "",
  operated: false
}
this.handleZero=this.handleZero.bind(this)
this.handleOne=this.handleOne.bind(this)
this.handleTwo=this.handleTwo.bind(this)
this.handleThree=this.handleThree.bind(this)
this.handleFour=this.handleFour.bind(this)
this.handleFive=this.handleFive.bind(this)
this.handleSix=this.handleSix.bind(this)
this.handleSeven=this.handleSeven.bind(this)
this.handleEight=this.handleEight.bind(this)
this.handleNine=this.handleNine.bind(this)
this.handleDecimal=this.handleDecimal.bind(this)
this.handleEquals=this.handleEquals.bind(this)
this.handlePlus=this.handlePlus.bind(this)
this.handleMinus=this.handleMinus.bind(this)
this.handleMultiply=this.handleMultiply.bind(this)
this.handleDivide=this.handleDivide.bind(this)
this.handleClear=this.handleClear.bind(this)
  }



  handleZero(event) {
    if (this.state.inputs.indexOf("0")>=0||this.state.currentDisplay ==="0") {
      return
    }
   else if (this.state.operated) {
      this.setState ({
     inputs: [0],
     defaultDisplay: "0",
     runningDisplay: "0",
     currentDisplay: "0",
     operation: "0",
     operated: false
 });
 }
    else {
    this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value,
  }));
}
  }

  handleOne(event) {
       if (this.state.operated||this.state.currentDisplay ==="0") {
         this.setState ({
        inputs: [1],
        defaultDisplay: "0",
        runningDisplay: "1",
        currentDisplay: "1",
        operation: "1",
        operated: false
    });
    }
      else {
      this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value,
    }));
  
      }
  }

  handleTwo(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [2],
     defaultDisplay: "0",
     runningDisplay: "2",
     currentDisplay: "2",
     operation: "2",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
  }
  handleThree(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [3],
     defaultDisplay: "0",
     runningDisplay: "3",
     currentDisplay: "3",
     operation: "3",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleFour(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [4],
     defaultDisplay: "0",
     runningDisplay: "4",
     currentDisplay: "4",
     operation: "4",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleFive(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [5],
     defaultDisplay: "0",
     runningDisplay: "5",
     currentDisplay: "5",
     operation: "5",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleSix(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [6],
     defaultDisplay: "0",
     runningDisplay: "6",
     currentDisplay: "6",
     operation: "6",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleSeven(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [7],
     defaultDisplay: "0",
     runningDisplay: "7",
     currentDisplay: "7",
     operation: "7",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleEight(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [8],
     defaultDisplay: "0",
     runningDisplay: "8",
     currentDisplay: "8",
     operation: "8",
     operated: false
 });
 }

   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}
  
  handleNine(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [9],
     defaultDisplay: "0",
     runningDisplay: "9",
     currentDisplay: "9",
     operation: "9",
     operated: false
 });
 }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleDecimal(event) {
    let regex= /(\+|\-|\*|\/)$|((\+|\-|\*|\/)\d+)$/
    console.log(this.state.inputs.indexOf("."))
    if (this.state.operated) {
      this.setState ({
     inputs: ["."],
     defaultDisplay: "0",
     runningDisplay: ".",
     currentDisplay: ".",
     operation: ".",
     operated: false
 });
 }
   else {
    if (this.state.inputs.indexOf(".")<0) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
  else if (this.state.inputs.indexOf(".")>0)  {
   
    if(regex.test(this.state.operation)) {
      this.state.inputs.push(event.target.value)
      this.setState(state => ({
        runningDisplay: this.state.inputs,
        currentDisplay: state.currentDisplay + event.target.value,
        operation: state.operation + event.target.value
      }));
    }
    else return
  }
  else return
  }
}

  handlePlus(event) {
    if (this.state.inputs[this.state.inputs.length-1]==="+") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="-"||
    this.state.inputs[this.state.inputs.length-1]==="*"||
    this.state.inputs[this.state.inputs.length-1]==="/"
    ) {
      let operationArr = this.state.operation.split("")
      console.log(operationArr)
      console.log(this.state.inputs[this.state.inputs.length-1])
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value)
      operationArr.pop()
      operationArr.join()

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr+event.target.value,
      operated: false
      //pop off the operator, then everything from else below?
    }))
  }
   else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value,
      operated: false
    }));
  }
}


  handleMinus(event) {
    if (this.state.inputs[this.state.inputs.length-1]==="-") {
    return
  }
  else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value,
      operated: false
    }));
  }
}

  handleMultiply(event) {
    if (this.state.inputs[this.state.inputs.length-1]==="*") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="+"||
    this.state.inputs[this.state.inputs.length-1]==="-"||
    this.state.inputs[this.state.inputs.length-1]==="/"
    )
     {
      let operationArr = this.state.operation.split("")
      console.log(operationArr)
      console.log(this.state.inputs[this.state.inputs.length-1])
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value)
      operationArr.pop()
      operationArr.join()

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr+event.target.value,
      operated: false
    }))
  }
    else { 
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value,
      operated: false
    }));
  }
  }

  handleDivide(event) {
    
    console.log(this.state.operation)
   //console.log(this.state.inputs.slice(-2))
   //console.log(this.state.inputs.splice(-2,2))
   console.log(this.state.inputs)
    if (this.state.inputs[this.state.inputs.length-1]==="/") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="*"||
    this.state.inputs[this.state.inputs.length-1]==="-" && Number.isInteger(this.state.inputs[this.state.inputs.length-2])||
    this.state.inputs[this.state.inputs.length-1]==="+")
     {
       //console.log(Number.isInteger(this.state.inputs[this.state.inputs.length-2]))
      let operationArr = this.state.operation.split("")
      //console.log(operationArr)
      //console.log(this.state.inputs[this.state.inputs.length-1])
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value + "condition 2")
      operationArr.pop()
      operationArr.join()

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr+event.target.value,
      operated: false
    }))
  }
 else if ((this.state.inputs[this.state.inputs.length-1]==="-" && this.state.inputs[this.state.inputs.length-2]==="*")||
 (this.state.inputs[this.state.inputs.length-1]==="-" && this.state.inputs[this.state.inputs.length-2]==="+")||
 (this.state.inputs[this.state.inputs.length-1]==="-" && this.state.inputs[this.state.inputs.length-2]==="/"))

  {
    let operationArr = this.state.operation.split("")
    this.state.inputs.splice(-2,2)
    operationArr.splice(-2,2)
    operationArr.join()
    this.state.inputs.push(event.target.value + "condition 3")

  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: this.state.inputs,
    operation: operationArr+event.target.value,
    operated: false
  }))
}
    else { 
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs +"condition 4",
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value,
      operated: false
    }));
  }
  }

  handleEquals(){
   let answer = eval(this.state.operation)
   this.state.inputs.push("=",answer)
   console.log(answer)
    this.setState(state => ({
     currentDisplay: answer,
     operation: answer,
     runningDisplay: this.state.inputs,
    inputs: [answer],
    operated: true//If you remove this, the runningDisplay keeps going
    }));
  }

  handleClear() {
    this.setState({
  inputs: [],
  defaultDisplay: "0",
  runningDisplay: "",
  currentDisplay: "0",
  operation: "",
  operated: false
    });
  }

  render() {
    return (
      <div>  
      <h1>{this.state.runningDisplay}</h1>
      <h1 id="display">{this.state.currentDisplay}</h1>
      <button id="zero" value="0" onClick={this.handleZero}>
        0
      </button>
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
      <button id="decimal" value="." onClick={this.handleDecimal}>
        .
      </button>
      <button id="add" value="+" onClick={this.handlePlus}>+</button>
      <button id="subtract" value="-" onClick={this.handleMinus}>-</button>
      <button id="multiply" value="*" onClick={this.handleMultiply}>*</button>
      <button id="divide" value="/" onClick={this.handleDivide}>/</button>
      <button id="equals" onClick={this.handleEquals}>=</button>
      <button id="clear" onClick={this.handleClear}>Clear All</button>
      </div>
      );
    }
  }


  ReactDOM.render(<App />, document.getElementById("app"))