const BaseModel = require('./BaseModel')
const UserModel = require('./UserModel')
const ListModel = require('./ListModel')

const BoardModel = BaseModel.extend({
    tableName: 'boards',
    boards: function() {
        return this.belongsToMany(UserModel)
    },
    lists: function () {
        return this.hasMany(ListModel)
    }
})

module.exports = BoardModel