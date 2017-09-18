import React, { Component } from 'react';
import Canvas from './Canvas';
import WebGl from './WebGl';
import '../css/Body.css';
class Body extends Component {
  render() {
    return (
      <div className="Body">
        <WebGl/>
        <Canvas/>
      </div>
    );
  }
}

export default Body;
