const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    title: {
        type:String,
        required:true,
        minLength:5,
        maxLength:100
    },
    article: {
        type:String,
        required:true,
        minLength:5,
        maxLength:300
    }
},{timestamps:true})

const Article = mongoose.model('Article',articleSchema)
module.exports = {
    Article
}