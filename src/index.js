import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import './style/index.scss';

ReactDOM.render(<App></App>,document.getElementById('root'))
registerServiceWorker();
