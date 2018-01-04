'use strict'

const winston = require('winston')

var LOG = function () {
  console.log('Loggin Level Set to: ' + process.env.LOG_LEVEL)
  var logger = new (winston.Logger)({
    transports: [
      // colorize the output to the console
      new (winston.transports.Console)({
        level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'silly',
        colorize: true
      })
    ]
  })

  return logger
}

module.exports = new LOG()
