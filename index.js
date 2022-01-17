class App extends React.Component {
  constructor(props) {
    super(props);

this.state={
  inputs: [],
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
    if (this.state.inputs.indexOf("0")===0 && this.state.inputs.length===1||this.state.currentDisplay ==="0") {
      return
    }
   else if (this.state.operated) {
      this.setState ({
     inputs: [0],
     runningDisplay: "0",
     currentDisplay: "0",
     operation: "0",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
    else {
    this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value,
  }));
}
  }

  handleOne(event) {
       if (this.state.operated||this.state.currentDisplay ==="0") {
         this.setState ({
        inputs: [1],
        runningDisplay: "1",
        currentDisplay: "1",
        operation: "1",
        operated: false
    });
    }
    else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
      this.state.inputs.push(event.target.value)
      this.setState(state => ({
        runningDisplay: this.state.inputs,
        currentDisplay: state.currentDisplay + event.target.value,
        operation: state.operation + event.target.value
      }));
    }
    else {
      this.state.inputs.push(event.target.value)
      this.setState(state => ({
        runningDisplay: this.state.inputs,
        currentDisplay: event.target.value,
        operation: state.operation + event.target.value
      }));
    }
  }

  handleTwo(event) {
    console.log(this.state.operation)
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [2],
     runningDisplay: "2",
     currentDisplay: "2",
     operation: "2",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleThree(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [3],
     runningDisplay: "3",
     currentDisplay: "3",
     operation: "3",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleFour(event) {
    console.log(this.state.operation)
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [4],
     runningDisplay: "4",
     currentDisplay: "4",
     operation: "4",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleFive(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [5],
     runningDisplay: "5",
     currentDisplay: "5",
     operation: "5",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleSix(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [6],
     runningDisplay: "6",
     currentDisplay: "6",
     operation: "6",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleSeven(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [7],
     runningDisplay: "7",
     currentDisplay: "7",
     operation: "7",
     operated: false
 });
 }
 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}

  handleEight(event) {
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [8],
     runningDisplay: "8",
     currentDisplay: "8",
     operation: "8",
     operated: false
 });
 }

 else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: state.currentDisplay + event.target.value,
    operation: state.operation + event.target.value
  }));
}
else {
  this.state.inputs.push(event.target.value)
  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: state.operation + event.target.value
  }));
}
}
  
  handleNine(event) {
   
    if (this.state.operated||this.state.currentDisplay ==="0") {
      this.setState ({
     inputs: [9],
     runningDisplay: "9",
     currentDisplay: "9",
     operation: "9",
     operated: false
 });
 }
   else if (Number.isInteger(+this.state.inputs[this.state.inputs.length-1])||this.state.inputs[this.state.inputs.length-1]===".") {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
  else {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: state.operation + event.target.value
    }));
  }
}

  handleDecimal(event) {
    let regex= /(\+|\-|\*|\/)$|((\+|\-|\*|\/)\d+)$/
    console.log(this.state.operation)
    if (this.state.operated) {
      this.setState ({
     inputs: ["0."],
     runningDisplay: "0.",
     currentDisplay: "0.",
     operation: ".",
     operated: false
 });
 }

   else if 
  (this.state.inputs.indexOf(".")<0) {
    this.state.inputs.push(event.target.value)
    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: state.currentDisplay + event.target.value,
      operation: state.operation + event.target.value
    }));
  }
  else if (this.state.inputs.indexOf(".")>=0)  {
   
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


  handlePlus(event) {
    if (this.state.inputs[this.state.inputs.length-1]==="+") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="*"||
    this.state.inputs[this.state.inputs.length-1]==="-" && Number.isInteger(+this.state.inputs[this.state.inputs.length-2])||
    this.state.inputs[this.state.inputs.length-1]==="/")
     {
      let operationArr = this.state.operation.split("")
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value)
      operationArr.pop()
      operationArr.join("")

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr.join("")+event.target.value,
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
    operationArr.join('')
    this.state.inputs.push(event.target.value)

  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: operationArr.join("")+event.target.value,
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
    console.log(this.state.operation)
    if (this.state.inputs[this.state.inputs.length-1]==="*") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="+"||
    this.state.inputs[this.state.inputs.length-1]==="-" && Number.isInteger(+this.state.inputs[this.state.inputs.length-2])||
    this.state.inputs[this.state.inputs.length-1]==="/"
    )
     {
      let operationArr = this.state.operation.split("")
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value)
      console.log(operationArr.pop())
     

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr.join("")+event.target.value,
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
    operationArr.join('')
    this.state.inputs.push(event.target.value)

  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: operationArr.join("")+event.target.value,
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
    if (this.state.inputs[this.state.inputs.length-1]==="/") {
      return
    }
    else if (this.state.inputs[this.state.inputs.length-1]==="*"||
    this.state.inputs[this.state.inputs.length-1]==="-" && Number.isInteger(+this.state.inputs[this.state.inputs.length-2])||
    this.state.inputs[this.state.inputs.length-1]==="+")
     {
      let operationArr = this.state.operation.split("")
      this.state.inputs.pop()
      this.state.inputs.push(event.target.value)
      operationArr.pop()
      operationArr.join('')

    this.setState(state => ({
      runningDisplay: this.state.inputs,
      currentDisplay: event.target.value,
      operation: operationArr.join("")+event.target.value,
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
    operationArr.join('')
    this.state.inputs.push(event.target.value)

  this.setState(state => ({
    runningDisplay: this.state.inputs,
    currentDisplay: event.target.value,
    operation: operationArr.join('')+event.target.value,
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

  handleEquals(){
    console.log(this.state.operation)
   let answer = eval(this.state.operation)
   this.state.inputs.push("=",answer)
    this.setState(state => ({
     currentDisplay: answer,
     operation: answer,
     runningDisplay: this.state.inputs,
    //inputs: [answer], //removed this cause I believe it's unncessary
    operated: true
    }));
  }

  handleClear() {
    this.setState({
  inputs: [0],
  runningDisplay: "0",
  currentDisplay: "0",
  operation: "",
  operated: false
    });
  }

  render() {
    return (
      <div id="container">  
      <div id="calculator">
        <div id="displayfield">
      <h1 id="runningdisplay">{this.state.runningDisplay}</h1>
      <h1 id="display">{this.state.currentDisplay}</h1>
      </div>
      <div className="buttonsection">
      <button className="buttons" id="nine" value="9" onClick={this.handleNine}>
        9
      </button>
      <button className="buttons" id="eight" value="8" onClick={this.handleEight}>
        8
      </button>
      <button className="buttons" id="seven" value="7" onClick={this.handleSeven}>
        7
      </button>
      <button className="buttons" id="six" value="6" onClick={this.handleSix}>
        6
      </button>
      <button className="buttons" id="five" value="5" onClick={this.handleFive}>
        5
      </button>
      <button className="buttons" id="four" value="4" onClick={this.handleFour}>
        4
      </button>
      <button className="buttons" id="three" value="3" onClick={this.handleThree}>
        3
      </button>
      <button className="buttons" id="two" value="2" onClick={this.handleTwo}>
        2
      </button>
      <button className="buttons" id="one" value="1" onClick={this.handleOne}>
        1
      </button>
      <button className="buttons" id="decimal" value="." onClick={this.handleDecimal}>
        .
      </button>
      <button className="buttons" id="zero" value="0" onClick={this.handleZero}>
        0
      </button>
      <button className="buttons" id="add" value="+" onClick={this.handlePlus}>+</button>
      <button className="buttons" id="subtract" value="-" onClick={this.handleMinus}>-</button>
      <button className="buttons" id="multiply" value="*" onClick={this.handleMultiply}>*</button>
      <button className="buttons" id="divide" value="/" onClick={this.handleDivide}>/</button>
      <button className="buttons" id="clear" onClick={this.handleClear}>CLEAR</button>
      <button className="buttons" id="equals" onClick={this.handleEquals}>=</button>
      </div>
      </div>
      </div>
      );
    }
  }


  ReactDOM.render(<App />, document.getElementById("app"))