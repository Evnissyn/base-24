import React, {Component} from 'react';
import Lotis, {lotis_enum, lotis_meaning} from './lotisClass';
import calcDisplayContainer from './calcDisplayContainer'
import {Link} from 'react-router'

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

export default class calculator extends Component{

  render () {
    let answer = new Lotis(0);
    answer.setLotisValue(this.props.arrayLotis);

    return (
      <div>
        <h1>Converter</h1>
        <h1><button onClick={this.props.resetConverter}><h3>Clear</h3></button></h1>
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
          <h1>You clicked:</h1>
          {
            answer.lotis.map((element) => {
              let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}.svg\" /> </svg>`
              return (
                <span key={element} className="small lotis">
                <figure dangerouslySetInnerHTML={{__html: str}} />
                <p>({element})</p>
                </span>
              )
            })
          }
          <h1>Converts To:</h1>
          <h1>{answer.value}</h1>
        </div>
      </div>
    )
  }
}

