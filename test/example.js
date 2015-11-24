var assert = require('should');
var jmd5s = require('../.');
var util = require('util');
var printValue;
function print(value) {
  if (typeof printValue !== 'undefined') {
    throw new Error('Test case does not match.');
  }
  printValue = value;
}
describe("./src/jmd5s.js", function () {
  printValue = undefined;
  it("encode():base", function () {
     print(jmd5s.encode('Hello'));
     assert.equal(printValue, "8b1a9953c4611296a827abf8c47804d7"); printValue = undefined;
  });
});
