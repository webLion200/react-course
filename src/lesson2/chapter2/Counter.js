import React, { Component } from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        console.log('enter constructor: ' + props.caption);
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        }
    }

    onClickIncrementButton() {
        this.setState({count: this.state.count + 1});
    }

    onClickDecrementButton() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        console.log('enter render ' + this.props.caption);
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
};

Counter.defaultProps = {
    initValue: 0
};

export default Counter;