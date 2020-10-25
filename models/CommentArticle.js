const {Schema, model} = require('mongoose')



const schema = new Schema({
    commentText: {type: String},
    commentDate: {type: String},
    commentAuthor: {type: String},
    owner: {type: Number, ref: 'Articles'}
})

module.exports = model('CommentArticle', schema)