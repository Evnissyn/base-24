import React, {Component} from 'react';
import {lotis_enum, lotis_meaning} from './lotisClass';

//LOTIS FUNCTIONING

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

export default class defaultDisplay extends Component{

  render () {
    // let str = "<svg viewBox= \"0 0 30 50\" class= \"show\" > <image x = \"0\" y=\"0\" width=\"30\" height=\"50\" xlink:href= \"symbols/1.svg\" /> </svg>"
    return (
      <div>
        <h1>An Introduction to the Symbols</h1>
        <p>So when I was a kid, I loved reading manga.  Absolutely LOVED reading manga.  And one of my absoulte favorites was <a href="https://en.wikipedia.org/wiki/Alice_19th"> Alice 19th</a>. Part of my love for this story was that the characters used magic words and magic symbols to save the world - kind of a standard YA fantasy story.  So I memorized the 24 magic symbols and words and had <i>so much fun</i> using them wherever I could.  Eventually I started using it as a counting system, and I would jokingly say that I knew how to count in base 24.  So here's my chance to actually implement converter and calculator using bsae 24.</p>
        <p>Here are the symbols:</p>
        {
          nums.map((element) => {
            let str = `<svg viewBox= "0 0 300 500" class= "show" > <image x = "0" y="0" width="300" height="500" xlink:href= "symbols/${element}.svg" /> </svg>`
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

