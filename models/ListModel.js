const BaseModel = require('./BaseModel')
const BoardModel = require('./BoardModel')
const TaskModel = require('./TaskModel')

const ListModel = BaseModel.extend({
    tableName: 'lists',
    hasTimestamps: true,
    boards: function() {
        return this.hasMany(BoardModel)
    },
    tasks: function () {
        return this.hasMany(TaskModel)
    }
})

module.exports = ListModel