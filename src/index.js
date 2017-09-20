import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store'

import App from '@/App'
import './style/index'

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,document.getElementById('root')
)
registerServiceWorker();
