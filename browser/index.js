'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store'

import defaultDisplay from './defaultDisplay'
import ConverterContainer from './ConverterContainer'
import ConvertDecimalContainer from './ConvertDecimalContainer'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={defaultDisplay} />
				<Route path="converter" component={ConverterContainer} />
				<Route path="decimalConverter" component={ConvertDecimalContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)