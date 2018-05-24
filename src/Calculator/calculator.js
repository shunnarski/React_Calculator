

import React from 'react';
import {Output} from './IO/Output';
import {Input} from './IO/Input';

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
