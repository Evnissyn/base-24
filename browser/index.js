'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store'

import defaultDisplay from './defaultDisplay'
import ConverterContainer from './ConverterContainer'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={defaultDisplay} />
				<Route path="converter" component={ConverterContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)