jmd5s(*5)
======

[![Build Status](https://img.shields.io/travis/zswang/jmd5s/master.svg)](https://travis-ci.org/zswang/jmd5s)
[![NPM version](https://img.shields.io/npm/v/jmd5s.svg)](http://badge.fury.io/js/jmd5s)

## 概述 「Overview」

jmd5s 是 md5 函数的封装，主要是为方便用 bower 管理

## API

```js
/**
 * 进行 md5 编码
 * 
 * @param {string} str 需要编码的字符串
 * @return {string} 返回对应的 MD5 十六进制字符串
 */
function encode(str) { }
```
## 示例 「Examples」

```js
var password = prompt("input password"); // foo
if (jmd5s.encode(password) === 'acbd18db4cc2f85cedef654fccc4a4d8') {
  alert('Login successful.');
}
```