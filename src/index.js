// lesson3中chapter3的index
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './lesson3-redux/chapter3/views/ControlPanel'

import {Provider} from 'react-redux';
import store from './lesson3-redux/chapter3/Store';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
