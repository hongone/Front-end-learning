'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class IndexModule {
    constructor(app) {
        this.app = app;
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