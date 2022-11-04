//import modules to use in this module

const names = require('./3-name')
const sayHi = require('./4-utils')
const alternativeExport = require('./5-alternative-import-method')
console.log('THE FUNCTION IS INVOKED DIRECTLY IN THE MODULE. SO IT GETS TRIGGERED WHEN WE IMPORT IT')
require('./6-mind-grenate')

console.log('\n')


//sayHi.sayHi('Harinder')
//sayHi.sayHi(names.john)

sayHi("SOME NAME\n")

console.log(alternativeExport.arrayitems[1])

console.log(alternativeExport.personsAttributes.name)

console.log (alternativeExport)