import React from 'react';
import {NumberButton, OperationButton, ClearButton} from './IO.js';

export class Input extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ClearButton/>
          <OperationButton value="+"/>
        </div>
        <div>
          <NumberButton value="7"/>
          <NumberButton value="8"/>
          <NumberButton value="9"/>
          <OperationButton value="-"/>
        </div>
        <div>
          <NumberButton value="4"/>
          <NumberButton value="5"/>
          <NumberButton value="6"/>
          <OperationButton value="x"/>
        </div>
        <div>
          <NumberButton value="1"/>
          <NumberButton value="2"/>
          <NumberButton value="3"/>
          <OperationButton value="/"/>
        </div>
        <div>
          <OperationButton value="+/-"/>
          <NumberButton value="0"/>
          <OperationButton value="."/>
          <OperationButton value="="/>
        </div>
      </div>

    );
  }
}
