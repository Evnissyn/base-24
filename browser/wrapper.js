import React, {Component} from 'react';
import {lotis_enum, lotis_meaning} from './lotisClass';
import defaultDisplay from './defaultDisplay'
import calcDisplayContainer from './calcDisplayContainer'

export default class wrapper extends Component{
	render () {
		return (
			<div>
				<defaultDisplay />
				<calcDisplayContainer />
			</div>
		)
	}
}