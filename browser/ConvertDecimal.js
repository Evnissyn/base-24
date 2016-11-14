import React, {Component} from 'react';
import Lotis, {lotis_enum, lotis_meaning} from './lotisClass';
import {Link} from 'react-router'

let nums = [0,1,2,3,4,5,6,7,8,9]

export default class Converter extends Component{

  render () {
    console.log
    return (
      <div>
        <h1>Converter</h1>
        <h1><button onClick={this.props.resetConverter}><h3>Clear</h3></button></h1>
        {
          nums.map((element) => {
            let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}_num.svg\" /> </svg>`
            return (
              <span key={element} className="calc lotis">
              <figure dangerouslySetInnerHTML={{__html: str}} onClick={()=>this.props.digitClicked(this.props.decValue * 10 + element)}/>
              </span>
            )
          })
        }
        <div>
          <h1>You clicked:</h1>
          <h1>{this.props.decValue}</h1>
          <h1>Converts To:</h1>

          {
            this.props.arrayLotis.map((element,index) => {
              let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}.svg\" /> </svg>`
              return (
                <span key={index} className="small lotis">
                <figure dangerouslySetInnerHTML={{__html: str}} />
                <p>({element})</p>
                </span>
              )
            })
          }
        </div>
      </div>
    )
  }
}

