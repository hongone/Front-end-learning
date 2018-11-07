import indexController from './indexController'
const routeInit={
    init(app,router){
        app.use(router(_ => {
            _.get('/', indexController.indexAction())
            _.post('/name/:id', (ctx, next) => {
                // ...
            })
        }));
    }
}
export default routeInit;