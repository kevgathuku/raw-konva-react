import React, { Component } from 'react';
import Konva from 'konva';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green'
    };
  }
  renderKonva(container) {
    let stage = new Konva.Stage({
      container: container,
      width: 100,
      height: 100
    });

    let layer = new Konva.Layer();
    let rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: this.state.color
    });

    layer.add(rect);
    stage.add(layer);
  }

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

  render() {
    return (
      <div ref={ref => this.renderKonva(ref)} onClick={this.handleClick} />
    );
  }
}

export default App;
