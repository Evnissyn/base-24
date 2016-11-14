import React, {Component} from 'react';
import {lotis_enum, lotis_meaning} from './lotisClass';

//LOTIS FUNCTIONING

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

export default class defaultDisplay extends Component{

  render () {
    let str = "<svg viewBox= \"0 0 30 50\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"30\" height=\"50\" xlink:href= \"symbols/1.svg\" /> </svg>"
    return (
      <div>
        <h1>An Introduction to the Symbols</h1>
        {
          nums.map((element) => {
            let str = `<svg viewBox= \"0 0 300 500\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"300\" height=\"500\" xlink:href= \"symbols/${element}.svg\" /> </svg>`
            return (
              <span key={element}>
              <figure dangerouslySetInnerHTML={{__html: str}}/>
              <p>{element}: {lotis_enum[element]}: {lotis_meaning[element]}</p>
              </span>
            )
          })
        }
      </div>
    )
  }
}

