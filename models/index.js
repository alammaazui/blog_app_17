const USER = require('./user.model')
const AUTHOR = require('./author.model')
const BLOG = require('./blog.model')


const db = {
    user : USER,
    author : AUTHOR,
    blog : BLOG,
}


db.user.hasOne(db.author,{foreignKey:'user_id'})
db.author.belongsTo(db.user,{foreignKey:'user_id'}) 
           
db.author.hasMany(db.blog ,{foreignKey:"author_id"})
db.blog.belongsTo(db.author,{foreignKey:"author_id"})


module.exports = db 


