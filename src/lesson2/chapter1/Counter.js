import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
    constructor() {
      super(...arguments);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick('点我啊');
    }
    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.handleClick}>+</button>
                <span>caption: {caption}</span>
            </div>
        );
    }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};
export default Counter;

