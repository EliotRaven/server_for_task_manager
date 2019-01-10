const BaseModel = require('./BaseModel')
const ListModel = require('./ListModel')

const TaskModel = BaseModel.extend({
    tableName: 'tasks',
    lists: function() {
        return this.belongsToMany(ListModel)
    }
})

module.exports = TaskModel