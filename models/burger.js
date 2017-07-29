var orm = require('../config/orm.js');
//Call ORM functions in here

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    update: function(id, cb) {
        var condition = "id = " + id;
        orm.updateOne("burgers", condition, function() {
            cb();
        });
    },
    insert: function(name, cb) {
        orm.insertOne("burgers", name, function() {
            cb();
        });
    }
}

//export at end
module.exports = burger;