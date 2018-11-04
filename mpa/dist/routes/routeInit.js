'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const routeInit = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/', (ctx, next) => {
                ctx.body = 'hello';
            });
            _.post('/name/:id', (ctx, next) => {
                // ...
            });
        }));
    }
};
exports.default = routeInit;