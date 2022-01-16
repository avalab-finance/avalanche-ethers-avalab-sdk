
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avalanche-ethers-avalab-sdk.cjs.production.min.js')
} else {
  module.exports = require('./avalanche-ethers-avalab-sdk.cjs.development.js')
}
