const bookshelf = require('../config/bookshelf')

const BaseModel = bookshelf.Model.extend({}, {
    index: function () {
        return this.fetchAll()
    },
    store: function (data) {
        return this.forge({...data}).save()
    },
    find: function (data) {
        return this.where({...data}).fetchAll()
    },
    findById: function (id, relation) {
        let relations = relation ? {withRelated: relation} : ''
        return this.forge({id}).fetch(relations)
    },
    update: function (id, data) {
        return this.forge({id}).save({...data})
    },
    destroy: function (id) {
        return this.forge({id}).destroy()
    }
})

module.exports = BaseModel;