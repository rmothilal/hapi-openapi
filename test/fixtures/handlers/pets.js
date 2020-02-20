'use strict';

var Store = require('../lib/store');

module.exports = {
    get: function (req, h) {
        return Store.all();
    },
    post: function (req, h) {
        let result = Store.get(Store.put(req.payload));
        return result.value;
    }
};
