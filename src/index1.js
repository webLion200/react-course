// lesson1和lesson2的index文件，只是ControlPanel引入的路径不同

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
