#!/usr/bin/env node
'use strict'

const check = require('./')

check(process.argv[2], function(err, result) {
  if (err) {
    console.log(err)
    return
  }
  console.log(process.argv[2] + ':' + result.code + ' ' + result.msg)
})


