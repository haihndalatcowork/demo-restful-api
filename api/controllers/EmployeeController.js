const db = require('../../configs/db');
const table = 'employee';


module.exports = {
    getAll: (req, res) => {
        let sql = `SELECT * FROM ${table}`;
        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    getById: (req, res) => {
        let sql = `SELECT * FROM ${table} WHERE id = ?`;
        db.query(sql, req.params.id, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    store: (req, res) => {
        let sql = `INSERT INTO ${table} SET ?`;
        db.query(sql, req.body, (err, response) => {
            if (err) throw err;
            res.json({success: true});
        })
    },
    updateById: (req, res) => {
        const data = req.body;
        let sql = `UPDATE ${table} SET ? WHERE id = ?`;
        db.query(sql, [data, req.params.id], (err, response) => {
            if (err) throw err;
            res.json({success: true});
        })
    },
    deleteById: (req, res) => {
        let sql = `DELETE FROM ${table} WHERE id = ?`;
        db.query(sql, req.params.id, (err, response) => {
            if (err) throw err;
            res.json({success: true});
        })
    }
};
