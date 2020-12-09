const orm = require("../config/orm.js");

const burgers = {
    select:(cb) => {
        orm.selectAll(function(res) {
            cb(res);
        });

    },
    insert:(newBurger, cb) => {
        orm.insertOne(newBurger, (res) => {
            cb(res);
        })

    },
    devour:(id, cb) => {
        orm.updateOne(id, (res) => {
            cb(res);
        })        
    }
}

module.exports = burgers;