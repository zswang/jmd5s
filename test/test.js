var assert = require('should');
var jmd5s = require('..');

var crypto = require('crypto');

function md5encode(text) {
  var md5 = crypto.createHash('md5');
  md5.update(text, 'utf-8');
  return md5.digest('hex');
}

describe('encode-asscii', function() {
  for (var i = 0; i < 10; i++) {
    var text = 'index' + i;
    it(JSON.stringify(text), (function(text) {
      return function() {
        assert.equal(md5encode(text), jmd5s.encode(text));
      }
    })(text));
  }
});

describe('encode-utf8', function() {
  for (var i = 0; i < 10; i++) {
    var text = '汉字' + i;
    it(JSON.stringify(text), (function(text) {
      return function() {
        assert.equal(md5encode(text), jmd5s.encode(text));
      }
    })(text));
  }
});