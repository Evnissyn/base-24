'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store'

import defaultDisplay from './defaultDisplay'
import calculatorContainer from './calculatorContainer'
import calcDisplayContainer from './calcDisplayContainer'
import ConverterContainer from './ConverterContainer'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<IndexRoute component={defaultDisplay} />
				<Route path="converter" component={ConverterContainer} />
				<Route path="calculator" component={calculatorContainer} />
				<Route path="answer" component={calcDisplayContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)