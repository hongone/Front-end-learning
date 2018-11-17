'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @fileoverview 实现index的数据模型
 * @author 10782884@qq
 */

/**
 * IndexModel 类， 生成一段异步的数据
 * @class
 */

let IndexService = class IndexService {
    /**
     * @constructor
     * @param {string} app ko2的上下文环境
     */
    constructor(app) {
        this.app = app;
    }
    /**
     * 获取具体的api的接口数据
     * @returns {Promist}返回的异步处理结果
     * @example
     * return new Promise
     * getData()
     */
    getdata() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve('数据已返回');
            }, 1000);
        });
    }
};
exports.default = IndexService;