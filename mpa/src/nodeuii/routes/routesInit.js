import indexController from './indexController'
const routesInit={
    init(app,router){
        app.use(router(_ => {
            _.get('/', indexController.indexAction())
            
        }));
    }
}
export default routesInit;