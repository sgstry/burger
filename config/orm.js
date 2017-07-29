var connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
    },
    insertOne: function(table, burger_name, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "');";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb();
        });
    },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured=true WHERE " + condition + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb();
        });
    }
};

module.exports = orm;