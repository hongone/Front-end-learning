var Mysqlhelper = require('../lib/mysqlhelper');
class Praise {
    constructor(config) {
        this.config = config;
    }
    add() {
        const mysql = new Mysqlhelper(this.config);
        const sql = 'update praise set num=num+1 where userid=1';
        let res = { err: 1, msg: 'fail' };
        try {
            mysql.query(sql);
            console.log('The record has been updated');
            res = { err: 0, msg: 'success' };
        } catch (err) {
            console.log(err);
        }

        mysql.close();
        return res;

    }
}

module.exports = Praise;