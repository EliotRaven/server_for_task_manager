const BaseModel = require('./BaseModel')
const BoardModel = require('./BoardModel')
const bcrypt = require('bcrypt')

const hashPassword = password => bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))

function beforeSave(user) {
    if(!user.password) return Promise.resolve(user)
    return hashPassword(user.password)
        .then(hash => ({...user, password: hash}))
        .catch(err => {return Promise.reject({message: `Error hashing password: ${ err }`})})
}

const UserModel = BaseModel.extend({
    tableName: 'users',
    hasTimestamps: true,
    boards: function() {
        return this.hasMany(BoardModel)
    }
}, {
    create: function (data) {
        return beforeSave(data).then( user => {
            return this.store(user)
        }).catch(err => {
            return {error: err}
        })
    }
})

module.exports = UserModel;