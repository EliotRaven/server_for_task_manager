const jwt    = require('jsonwebtoken');
const User   = require('../models/UserModel');
const bcrypt = require('bcrypt');

module.exports = {
    login,
    registration,
    logout
};

function login({email, password}) {
    return new Promise((resolve, reject)=>{
        User.find({email}).then(response => {
            let user = response.toJSON()[0]
            if (!user) {
                return reject({message: 'Email or password are wrong'})
            }
            if(user && bcrypt.compareSync(password, user.password)) {
                const remember_token = jwt.sign({sub: user.id}, process.env.JWT_SECRET);
                const authUser = {...user, updated_at: new Date()}
                return {
                    ...authUser,
                    remember_token
                }
            }
        }).then(user => {
            User.update(user.id, user).then(user => {
                let {password, ...authUser} = user.toJSON();
                return resolve(authUser)
            })
        }).catch(error => {
            return reject(error)
        })
    })
}

function registration(user) {
    return new Promise((resolve, reject)=>{
        User.store(user).then( newUser => {
            if(newUser.error){
                return reject(newUser.error)
            }
            const token = jwt.sign({sub: newUser.id}, process.env.JWT_SECRET);
            return resolve({
                ...newUser[0],
                token
            });
        }).catch(err => {return reject({error: err})})
    })
}

function logout(id, remember_token) {
    return new Promise((resolve, reject)=>{
        User.update(id, {remember_token}).then(user => {
            console.log('user', user)
            if(user.error) return reject(user.error)
            return resolve(user[0])
        })
    })
}