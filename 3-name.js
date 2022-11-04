//Node uses CommonJS under the hood. Every file is a module (by default)

const secret = 'SUPER SECRET' //LOCAL

//SHARE THESE
const john ='john'
const peter = 'peter'

module.exports = { john,peter }

console.log(module)
