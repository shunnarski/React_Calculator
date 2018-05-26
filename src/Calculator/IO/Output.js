import React from 'react';
import {OutputBar} from './IO.js';
import './Output.css';
export class Output extends React.Component {
  render() {
    return (
      <div className="output">
        <OutputBar />
      </div>
    );
  }
}
