import React from 'react';
import './OutputBar.css';
import './InputButtons.css';

var valueStore = null;
var opStore = null;
var isNewValue = false;

export class NumberButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-button" onClick={() => numEntered(this.props.value)}>
        <div className="number-button">
          <span>{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export class OperationButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-button" onClick={() => operation(this.props.value)}>
        <div className="operation-button">
          <span>{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export class ClearButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-button" onClick={() => clearResultView()}>
        <div className="clear-button">
          <span>clear</span>
        </div>
      </div>
    );
  }
}

class ResultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: '0'};

    clearResultView = clearResultView.bind(this);
    numEntered = numEntered.bind(this);
    getResultViewValue = getResultViewValue.bind(this);
    showResult = showResult.bind(this);
    switchSign = switchSign.bind(this);
  }
  render() {
    return <span>{this.state.result}</span>;
  }
}



export class OutputBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="output-bar">
        <div className="result-view">
          <ResultView />
        </div>
      </div>
    );
  }
}

/* Number entered to be displayed on calculator */
function numEntered(num){
  var currentState = this.state.result;
  if((currentState === '0' && num !== '.') || isNewValue){
    this.setState({result: num});
    isNewValue = false;
  }
  else{
    currentState += num;
    this.setState({result: currentState})
  }
}

function getResultViewValue() {
  return this.state.result;
}


function clearResultView(){
  valueStore = null;
  opStore = null;
  this.setState({result: '0'});
}

function operation(op) {
  if(op === '='){
    var val = calculate();
    showResult(val);
  }
  else if(op === '.'){
    numEntered(op);
  }
  else if(op === '+/-'){
    switchSign();
  }
  else {
    storeValues(op);
  }

}

function switchSign(){
  var currentVal = getResultViewValue();
  if(currentVal === '0' || currentVal === '0.'){
    return;
  }
  if(currentVal[0] !== '-'){
    let sign = '-';
    let switchedVal = sign + currentVal;
    this.setState({result: switchedVal})
  }
  else{
    let switchedVal = currentVal.substring(1, currentVal.length);
    this.setState({result: switchedVal})
  }
}

function storeValues(op){
  valueStore = getResultViewValue();
  opStore = op;
  isNewValue = true;
}

function calculate(){
  switch(opStore){
    case '+':
      return add();
    case '-':
      return subtract();
    case 'x':
      return multiply();
    case '/':
      return divide();
  }
}

function add(){
  const firstVal = parseFloat(valueStore);
  const secondVal = parseFloat(getResultViewValue());
  return Math.round((firstVal + secondVal) * 10000000000 ) / 10000000000;
}

function subtract() {
  const firstVal = parseFloat(valueStore);
  const secondVal = parseFloat(getResultViewValue());
  return Math.round((firstVal - secondVal) * 10000000000 ) / 10000000000;

}

function multiply() {
  const firstVal = parseFloat(valueStore);
  const secondVal = parseFloat(getResultViewValue());
  console.log(firstVal);
  console.log(secondVal);
  return Math.round((firstVal * secondVal) * 10000000000 ) / 10000000000;

}

function divide() {
  const firstVal = parseFloat(valueStore);
  const secondVal = parseFloat(getResultViewValue());
  return Math.round((firstVal / secondVal) * 10000000000 ) / 10000000000;

}

function showResult(result){
  this.setState({result: result});
}
