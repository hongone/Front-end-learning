import Vue from 'vue';
import Router from 'vue-router';
import Bar from '../components/Bar.vue';

Vue.use(Router);

function createRouter(){
    const routes = [
        {
            path: '/bar',
            component: Bar
        },
        {
            path: '/foo',
            component: () => import('../components/Foo.vue') //异步路由
        }
    ];
    
    const router = new Router({
        // mode: 'history',
        mode: 'hash',
        routes
    });

    return router;
}

export default createRouter;