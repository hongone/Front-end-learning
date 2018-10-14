var mysql = require('mysql');
class Mysqlhelper {
    constructor(config) {

        this.db = mysql.createConnection({
            host: config.get('dbhost'),
            port: config.get('dbport'),
            charset: config.get('dbcharset'),
            user: config.get('dbuser'),
            password: config.get('dbpassword'),
            database: config.get('database')
        });;
    }
    async query(sql, values) {
        let db = this.db;
        return new Promise(function (resolve, reject) {
            db.connect();
            db.query(sql, values, function (err, rows, fields) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(rows);
                }
            });
        });


    }
    close() {
        this.db.end();
        // this.connection = null;

    }

}
module.exports = Mysqlhelper;
/*
add () {
    // console.log(config);
    // console.log(config.get('dbhost'));
    var connection = mysql.createConnection({
        host: config.get('dbhost'),
        port: config.get('dbport'),
        charset: config.get('dbcharset'),
        user: config.get('dbuser'),
        password: config.get('dbpassword'),
        database: config.get('database')
    });


    // connection.connect();
    // connection.query('SELECT userid FROM praise', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The userid is: ', results[0].userid);
    //   });
    connection.query('update praise set num=num+1 where userid=1', function (error, results, fields) {
    // if (error) throw error;
        if(error){
            console.log(error);
            return {err :1 ,msg : 'fail'};
        }
        console.log('The record has been updated ');
    
    });
    
    connection.end();
    return {err :0 ,msg : 'success'};
}    
*/