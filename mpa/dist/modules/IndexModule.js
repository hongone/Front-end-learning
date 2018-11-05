'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class IndexModule {
    constructor(ctx) {
        this.ctx = ctx;
    }
    getdata() {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve('the data');
            }, 1000);
        });
    }
}
exports.default = IndexModule;