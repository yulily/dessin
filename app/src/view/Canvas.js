import React, { Component } from 'react';

class Canvas extends React.Component {
  static defaultProps = {
    width: 800,
    height: 1200,
    strokeStyle: '#000',
    lineWidth: 12,
    lineJoin : 'round',
    lineCap  : 'round',
    onSelected: () => {},
  };

  canvas = null;
  ctx = null;
  isDrag = false;

  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.strokeStyle = this.props.strokeStyle
    this.ctx.lineWidth = this.props.lineWidth
    this.ctx.lineJoin = this.props.lineJoin
    this.ctx.lineCap  = this.props.lineCap
    this.ctx.scale(2, 2)
    this.addMouseEvents()
  }

  componentWillUnmount() {
    this.removeMouseEvents()
  }

  addMouseEvents() {
    this.canvas.addEventListener('mousedown', this.onMouseDown, false);
    this.canvas.addEventListener('mousemove', this.onMouseMove, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
  }

  removeMouseEvents() {
    this.canvas.removeEventListener('mousedown', this.onMouseDown, false);
    this.canvas.removeEventListener('mousemove', this.onMouseMove, false);
    document.removeEventListener('mouseup', this.onMouseUp, false);
  }

  onMouseDown = (e) => {
    this.ctx.beginPath()
    this.ctx.moveTo(parseInt(e.offsetX), parseInt(e.offsetY))
    this.isDrag = true
  };

  onMouseMove = (e) => {
    if (!this.isDrag) return
    this.ctx.lineTo(parseInt(e.offsetX), parseInt(e.offsetY))
    this.ctx.stroke()
  };

  onMouseUp = (e) => {
    this.ctx.closePath()
    this.isDrag = false
  };

  render() {
    return (
      <div className="CanvasWrap">
        <canvas className="Canvas" width={this.props.width} height={this.props.height} ref={(c) => {this.canvas=c}}/>
      </div>
    )
  }

}
export default Canvas;
