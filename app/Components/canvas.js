import React, { Component, PureComponent } from 'react';
import styles from '../styles';

class Canvas extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      draw: false,
      x: '',
      y: '',
    }
    this.draw = this.draw.bind(this);
    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
  }

  start (event) {
    this.setState({
      draw:true,
      x: event.clientX,
      y: event.clientY,
    })
  }

  end () {
    this.setState({draw:false})
  }

  draw (event) {
    if(this.state.draw) {
      const canvas = this.refs.canvas.getContext('2d');
      canvas.beginPath();
      canvas.strokeStyle = this.props.color;
      canvas.lineCap = 'round';
      canvas.lineJoin = 'round';
      canvas.lineWidth = this.props.weight;
      canvas.moveTo(this.state.x - 30, this.state.y - 30);
      canvas.lineTo(event.clientX - 30, event.clientY - 30);
      canvas.stroke();
      canvas.closePath();
      this.setState({x:event.clientX,y:event.clientY});
    }
  }

  render () {
    return (
      <div style={{width:'100%',height:'100%'}}>
        <canvas 
          ref="canvas" 
          key={this.props.clear}
          onMouseDown={this.start} 
          onMouseMove={this.draw} 
          onMouseUp={this.end} 
          onMouseLeave={this.end}
          width={this.props.width} 
          height={this.props.height} 
          style={styles.uiCanvas.base}>
        </canvas>
      </div>
    )
  }
}

export default Canvas;