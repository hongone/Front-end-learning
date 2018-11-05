import indexController from './indexController'
const routeInit={
    init(app,router){
        app.use(router(_ => {
            _.get('/', async (ctx, next) => {
                await indexController.index(ctx,next);
            })
            _.post('/name/:id', (ctx, next) => {
                // ...
            })
        }));
    }
}
export default routeInit;