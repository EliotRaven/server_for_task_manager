const BaseModel = require('./BaseModel')
const BoardModel = require('./BoardModel')
const TaskModel = require('./TaskModel')

const ListModel = BaseModel.extend({
    tableName: 'lists',
    boards: function() {
        return this.hasMany(BoardModel)
    },
    tasks: function () {
        return this.belongsToMany(TaskModel)
    }
})

module.exports = ListModel