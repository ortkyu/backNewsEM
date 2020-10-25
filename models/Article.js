const {Schema, model} = require('mongoose')



const schema = new Schema({
    title: {type: String},
    body: {type: String},
    photo: {type: String},
    idArticle: {type: Number},
    theme: {type: String},
    comments: [
        {
            commentText: {type: String},
            commentDate: {type: String},
            author: {type: String}
    }
    ]
})

module.exports = model('Articles', schema)