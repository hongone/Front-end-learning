'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rp = require('request-promise');

var Praise = function () {
    function Praise() {
        _classCallCheck(this, Praise);
    }

    _createClass(Praise, [{
        key: 'post',
        value: function post() {

            var options = {
                method: 'GET',
                uri: 'http://127.0.0.1:8000/praise/add',
                json: true // Automatically stringifies the body to JSON
            };

            return rp(options).then(function (data) {
                if (!data) {

                    return { err: 1, msg: '接口请求出错' };
                }

                if (data.err == 0) {
                    return { err: 0, msg: '接口请求成功' };
                } else {

                    return { err: 1, msg: '接口请求被拒绝:' };
                }
                console.error('接口请求信息:' + data);
            }).catch(function (err) {
                // POST failed...
                console.error('接口访问出错:' + err);
                return { err: 2, msg: '接口访问出错' };
            });
        }
    }]);

    return Praise;
}();

module.exports = Praise;