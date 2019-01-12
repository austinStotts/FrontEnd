import React, { Component, PureComponent } from 'react';
import styles from '../styles';

class Canvas extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      draw: false,
      x: '',
      y: '',
      url: '',
      undo: [],
    }
    this.draw = this.draw.bind(this);
    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.download = this.download.bind(this);
    this.save = this.save.bind(this);
    this.undo = this.undo.bind(this);
  }

  save () {
    if(this.state.undo.length > 10) {
      let copy = document.getElementById('canvas').Uint8ClampedArray();
      this.setState({undo:undo.shift()});
      this.setState({undo:undo.push(copy)});
    } else {
      let copy = document.getElementById('canvas');
      copy = new Uint8ClampedArray(copy);
      this.setState({undo: undo.concat(ImageData(copy, screen.width - 70, screen.height - 500))});
    }
  }

  undo () {
    if(this.state.url.length > 0) {
      document.getElementById('canvas').putImageURL(this.state.url.pop());
    }
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

  download () {
    let canvas = document.getElementById('canvas');
    let el = document.getElementById('download');
    this.setState({url:canvas.toDataURL('image/jpeg', 1.0)});
    el.setAttribute('download', 'myPrettyPicture:)');
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
          id="canvas"
          ref="canvas" 
          key={this.props.clear}
          onMouseDown={(event)=>{
            this.start(event);
            // this.save();
          }}
          onMouseMove={this.draw} 
          onMouseUp={this.end} 
          onMouseLeave={this.end}
          width={this.props.width} 
          height={this.props.height} 
          style={styles.uiCanvas.base}>
        </canvas>
        <a id="download" onClick={this.download} href={this.state.url} style={{display:'block'}}>download</a>
        <a onClick={this.undo}>undo</a>
      </div>
    )
  }
}

export default Canvas;