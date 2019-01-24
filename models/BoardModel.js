const BaseModel = require('./BaseModel')
const UserModel = require('./UserModel')
const ListModel = require('./ListModel')

const BoardModel = BaseModel.extend({
    tableName: 'boards',
    hasTimestamps: true,
    users: function() {
        return this.hasMany(UserModel)
    },
    lists: function () {
        return this.hasMany(ListModel)
    }
}, {
    create: function (data, id) {
        return this.forge({...data, user_id: id}).save()
    }
})

module.exports = BoardModel