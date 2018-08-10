import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
    constructor() {
        super(...arguments);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name) {
        alert(name)
    }
    render() {
        console.log('enter ControlPanel render');
        return (
            <div style={style}>
                <Counter caption="First" handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default ControlPanel;

