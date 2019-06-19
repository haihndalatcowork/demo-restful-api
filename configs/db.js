const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'vNfowf9ZW7',
    password: 'zHmehnwMOh',
    database: 'vNfowf9ZW7'
});

db.connect(err => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('MySQL connected as id ' + db.threadId);
    }
);

module.exports = db;