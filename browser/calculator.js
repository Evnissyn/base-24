import React, {Component} from 'react';
import {lotis_enum, lotis_meaning} from './lotisClass';
import calcDisplayContainer from './calcDisplayContainer'
import {Link} from 'react-router'

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

export default class calculator extends Component{

  render () {
    return (
      <div>
        <h1>Calculator</h1>
        <Link to="/answer"><h1>See Answer</h1></Link>
        {
          nums.map((element) => {
            let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}.svg\" /> </svg>`
            return (
              <span key={element} className="calc lotis">
              <figure dangerouslySetInnerHTML={{__html: str}} onClick={()=>this.props.symbolClicked(element)}/>
              </span>
            )
          })
        }
        <div>
          {/*this.props.arrayLotis.map(element => (
            <p key={element}>{element}</p>
          ))*/}
          <p>Current: {this.props.selectedLotis}</p>
        </div>
      </div>
    )
  }
}

