import React, {Component} from 'react';
import Lotis, {lotis_enum} from './lotisClass';
import {Link} from 'react-router'

export default class calcDisplay extends Component{
	render () {
		let symbols = this.props.arrayLotis;
		let newLotisNum = new Lotis(0);
		newLotisNum.setLotisValue(symbols);
		return (
			<div>
				<div>
				{
					symbols.map((element) => {
			            let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}.svg\" /> </svg>`
			            return (
			              <span key={element} className="calc lotis">
			              <figure dangerouslySetInnerHTML={{__html: str}} />
			              <p>({element})</p>
			              </span>
			             )
			        })
				}
				</div>
				<h1> converts to </h1>
				<h1>{newLotisNum.value}</h1>
				<p onClick={this.props.resetCalculator}>Reset and Return to Calculator</p>
			</div>
		)
	}
}