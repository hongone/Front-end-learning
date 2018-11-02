import Koa from ('koa');
import config from ('./config');
import router  from ('koa-simple-router');
import routeInit from ('./routes/routeInit');
const app = new Koa();
routeInit.init(app,router);

app.listen(config.port, () => {
    console.log(`server is running on ${config.port}`);
})