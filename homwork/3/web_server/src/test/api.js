const request = require('supertest');
const app = require('../app.js');
const config = require('../config/');

describe('测试接口路由/praise', function () {
    let server =app.listen(config.get('svport'));
    it('respond with json', function (done) {
        request(server)
            .get('/index/praise')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, { err: 0, msg: '接口请求成功' }, done);
        // .end(function(err, res) {
        //     if (err) return done(err);
        //     if(res.err == 0 && res.msg=='success'){
        //         done();
        //     }else{

        //     }
        //   });

    });
    // describe('#test server', () => {

    //     it('#test GET /', async () => {
    //         let res = await request(server)
    //             .get('/')
    //             .expect('Content-Type', /text\/html/)
    //             .expect(200, '<h1>Hello, world!</h1>');
    //     });

    //     it('#test GET /path?name=Bob', async () => {
    //         let res = await request(server)
    //             .get('/path?name=Bob')
    //             .expect('Content-Type', /text\/html/)
    //             .expect(200, '<h1>Hello, Bob!</h1>');
    //     });
    // });
});