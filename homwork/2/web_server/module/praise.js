const rp=require('request-promise');
class Praise{
    constructor(){

    }
    post() {
    
        const options = {
            method: 'GET',
            uri: 'http://127.0.0.1:8000/praise/add',
            json: true // Automatically stringifies the body to JSON
        };
        
        return rp(options)
            .then(function (data) {
                if(!data){
                    
                    return {err : 1 , msg : '接口请求出错'  }
                }
                
                if(data.err == 0){
                    return {err : 0 , msg : '接口请求成功' }
                }else{
                 
                    return {err : 1 , msg : '接口请求被拒绝:' }
                }
                console.error('接口请求信息:' + data);
            
            })
            .catch(function (err) {
                // POST failed...
                console.error('接口访问出错:' + err);
                return {err : 2 , msg : '接口访问出错' }
            });
    }    
}


module.exports = Praise;