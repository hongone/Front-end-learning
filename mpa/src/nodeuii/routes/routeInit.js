const routeInit={
    init(app,router){
        app.use(router(_ => {
            _.get('/', (ctx, next) => {
                ctx.body = 'hello'
            })
            _.post('/name/:id', (ctx, next) => {
                // ...
            })
        }));
    }
}
export default routeInit;