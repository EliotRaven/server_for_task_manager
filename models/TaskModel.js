const BaseModel = require('./BaseModel')
const ListModel = require('./ListModel')

const TaskModel = BaseModel.extend({
    tableName: 'tasks',
    hasTimestamps: true,
    lists: function() {
        return this.hasMany(ListModel)
    }
}, {
    dndsort: function (sort, data) {
        let self = this
        return new Promise((resolve, reject) => {
            self.where({...sort}).orderBy('position', 'ASC').fetchAll().then(async model => {
                let [removed] = model.splice(parseInt(data.startIndex)-1, 1);
                model.splice(parseInt(data.endIndex)-1, 0, removed);
                model.map(async (item, index) => {
                    item.set({ position: index+1 })
                    return await item.save()
                })
                let tasks = await self.where({board_id : data.board_id}).fetchAll()

                resolve(tasks)

            }).catch(error => reject(error))
        })
    }
})

module.exports = TaskModel