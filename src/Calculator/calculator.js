

import React from 'react';
import {Output} from './IO/Output';
import {Input} from './IO/Input';
import './Calculator.css';

export class Calculator extends React.Component {
  render() {
    return (
      <div>
          <Output/>
          <Input/>
      </div>
    );
  }
}
