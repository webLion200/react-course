import React from 'react'
import CountDown from './countDown'

const wrapper = () => {
    return (
        <CountDown startCount={10}>
            {
                (count) => <h1>{count}</h1>
            }
        </CountDown>
    )
};

export default wrapper