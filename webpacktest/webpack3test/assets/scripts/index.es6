require('../styles/index.less');


import {data} from './data.es6';
//const data =123;
console.log(data);

import ('./async.es6').then(function(res){
    res.default();
});