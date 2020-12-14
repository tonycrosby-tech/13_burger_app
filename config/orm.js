// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: (cb) => {
        let queryS = `SELECT * FROM burgers`;
        connection.query(queryS, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    /* create*/ 
    insertOne: (newBurger, cb) => {
        console.log(newBurger);
        let queryS = `INSERT INTO burgers VALUE (default,"${newBurger}",false)`;
        connection.query(queryS, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: (id, cb) => {
        let queryS = `UPDATE burgers SET devoured = true WHERE id = ${id}`;
        connection.query(queryS, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;
