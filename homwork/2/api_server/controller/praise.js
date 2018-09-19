const Praise = require('../module/praise');
const config = require('../config/');
const praise = {
    method: 'GET',
    path: '/praise',
    handler: function (request, h) {
        const pr = new Praise(config);

        return pr.add();

    }
};
module.exports = [praise];