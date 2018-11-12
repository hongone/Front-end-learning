const {join} = require('path');
module.exports ={
    output :{
        path: join(__dirname,'../dist/assets'),
        publicPath: '/',
        filename : "scripts/[name].bundles.js"
    }
}