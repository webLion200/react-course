// lesson3中chapter1,chapter2,chapter3的index文件，
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './lesson3-redux/chapter2/views/ControlPanel'

ReactDOM.render(
    <ControlPanel />,
    document.getElementById('root')
);
registerServiceWorker();
