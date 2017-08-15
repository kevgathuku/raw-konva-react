import React, { Component } from 'react';
import './App.css';

import { Layer, Rect, Circle, Stage, Line, Group } from "react-konva";

class MyGroup extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            topLeft: { x: 50, y: 50 }
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(dragMove) {
        const pos = this.circle.getAbsolutePosition();
         console.log("Circle Absolute position", this.circle.getAbsolutePosition());
         console.log("Rect Absolute position", this.rect.getAbsolutePosition());

        const percentageX = pos.x / 600 * 100;
        const percentageY = pos.y / 300 * 100;
        console.log("PercentageX :" + percentageX);
        console.log("PercentageY :" + percentageY);

        this.setState({ topLeft: { x: percentageX, y: percentageY } });
    }

    showPosition = () => {
      const x = this.state.topLeft.x * 600 / 100;
      const y = this.state.topLeft.y * 300 / 100;
      console.log('Absolute position', this.rect.getAbsolutePosition());
      console.log('X and Y on Rect Node', x, y);
    };

    render() {
        const x = this.state.topLeft.x * 600 / 100;
        const y = this.state.topLeft.y * 300 / 100;
        const points = [x, y, x + 60, y, x + 60, y + 60, x, y + 60];
        return (
            <Group draggable onDragEnd={this.onDragEnd} x={0} y={0}>
                <Circle
                    ref={circle => (this.circle = circle)}
                    x={x}
                    y={y}
                    fill="yellow"
                    stroke={2}
                    radius={10}
                />

                <Rect
                    ref={node => (this.rect = node)}
                    x={x}
                    y={y}
                    width={60}
                    height={100}
                    fill="rgba(123, 131, 205, 0.6)"
                    stroke={2}
                    onClick={this.showPosition}
                />
            </Group>
        );
    }
}

function App() {
    return (
        <div style={{ maxWidth: "100%", marginRight: "15px" }}>
            <Stage width={600} height={300}>
                <Layer>
                    <Rect x={0} y={0} width={600} height={300} fill="blue" />
                    <MyGroup />
                </Layer>
            </Stage>
        </div>
    );
}

export default App;
