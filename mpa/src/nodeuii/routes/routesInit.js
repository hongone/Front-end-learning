import indexController from './indexController'
const routeInit={
    init(app,router){
        app.use(router(_ => {
            _.get('/',  (ctx, next) => {
                indexController.indexAction(ctx,next);
            })
            _.post('/name/:id', (ctx, next) => {
                // ...
            })
        }));
    }
}
export default routeInit;