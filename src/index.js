import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './lesson2/chapter3/update/ControlPanel'

ReactDOM.render(
    <ControlPanel />,
    document.getElementById('root')
);
registerServiceWorker();
