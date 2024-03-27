const object = { }

const array = [ ]

const date = new Date()

const map = new Map()

const set = new Set()

const string = 'строка'

const number = 11

const boolean = true 

const noValue1 = undefined

const noValue2 = null

const symbol = Symbol()

const funct = () => {
    console.log('function')
}


const character = { 
    kind: {
        eyes: 'blue',
        flower: 'rose',
        height: 170,
        object: object,
        array: array,
        date: date,
        map: map,
        set: set,
        string: string,
        number: number,
        boolean: boolean,
        noValue1: noValue1,
        noValue2: noValue2,
        symbol: symbol,
        funct: funct
    }
}

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
   }

let copy = deepCopy(character);
console.log(copy);

 // проверка с изменением свойства
 // character.kind.object = {
 //   location: 'tower'
 // }

 // проверка
 // console.log(copy);


