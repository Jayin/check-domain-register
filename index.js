// http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=baidu.com
'use strict'

const request = require('request');
const xml2js = require('xml2js');

function checkDomain(domain, cb) {
  request('http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=' + domain, function(error, response, body) {
    if (error) {
      cb(error)
      return
    }
    if (!error && response.statusCode == 200) {
      //211 是已被注册。 210 是未注册。
      if (body.indexOf('211') !== -1) {
        cb(null, {
          'code': '211',
          'msg': '√ 已注册'
        }) 
      } else if (body.indexOf('210') !== -1) {
        cb(null, {
          'code': '210',
          'msg': 'x 未注册'
        })
      } else {
        cb(null, {
          'code ': '-1',
          'msg': '未知'
        })
      }
    }
  })
}


module.exports = checkDomain;
