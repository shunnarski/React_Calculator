import React from 'react';
import {OutputBar} from './OutputElements/OutputBar.js';
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
