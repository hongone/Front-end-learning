'use strict';

const Hapi = require('hapi');
const routes = require('./controller/');
const config = require('./config/');
// Create a server with a host and port
const server=Hapi.server({
    host:config.get('svhost'),
    port:config.get('svport')
});

// Add the route
// server.route({
//     method:'GET',
//     path:'/hello',
//     handler:function(request,h) {

//         return'hello world';
//     }
// });

//server.route(hello());
for (let api of routes) {
    server.route(api);
}
server.route({
    method: 'GET',
    path: '/*',
    handler: function (request, h) {
        console.log(request.info);

    }
});


// Start the server
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
init();

process.on('unhandledRejection', (err) => {

    console.log(err);
   // process.exit(1);
});

