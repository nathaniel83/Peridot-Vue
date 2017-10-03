/* 
    Oracle == source of truth for configuration. It determines which other config files to merge with. 
*/

let merge = require('webpack-merge')
let config = require('./base')
let devConfig = require('./dev')
let prodConfig = require('./prod')

let curConfig = process.env.NODE_ENV === "production" ? prodConfig : devConfig

let lastSettings = {
  nodeEnv: JSON.stringify(process.env.NODE_ENV),
  isProd: process.env.NODE_ENV === "production",
  isDev: process.env.NODE_ENV === "development",
  isTesting: process.env.NODE_ENV === "testing"
}

module.exports = merge(config, curConfig, lastSettings)
