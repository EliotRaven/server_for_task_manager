'use strict';

const CollectionBase = require('bookshelf/lib/base/collection');

CollectionBase.prototype.splice = function () {
    return Array.prototype.splice.apply(this.models, arguments);
};
