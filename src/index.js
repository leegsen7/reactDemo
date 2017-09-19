import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import {Provider,connect} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './App'
import './style/index.scss';

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,document.getElementById('root')
)
registerServiceWorker();
