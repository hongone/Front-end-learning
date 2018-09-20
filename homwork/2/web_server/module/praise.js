const rp=require('request-promise');

const pastPraise = () =>{
    
    let options = {
        method: 'GET',
        uri: 'http://127.0.0.1:8000/praise',
        json: true // Automatically stringifies the body to JSON
    };
     
    return rp(options)
        .then(function (data) {
            if(!data){
                console.error('接口请求出错:' + data);
                return {err : 1 , msg : '接口请求出错:' + data}
            }
            
            if(data.err == 0){
                return {err : 0 , msg : '接口成功' }
            }else{
                return {err : 1 , msg : '接口请求被拒绝:' + data.msg}
            }
           
        })
        .catch(function (err) {
            // POST failed...
            console.error('接口访问出错:' + err);
            return {err : 2 , msg : '接口访问出错' + err}
        });
}

module.exports = pastPraise;