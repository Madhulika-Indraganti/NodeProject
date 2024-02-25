const path = require('path')
const process = require('process')

console.log(process.mainModule.filename)

let dirname = path.dirname(process.mainModule.filename)

module.exports = dirname