const {Router} = require('express')
const Articles = require('../models/Article')
const router = Router()
const cors = require('cors')

app.use(cors())


router.get('/', async(req,res) => {
    try {
        const articles = await Articles.find().
            select('title photo date idArticle').
            limit(3).
            sort({idArticle: -1})
        res.set('Content-Type', 'text/plain');
        if (articles) {
            return res.send(articles)
        }
        res.status(404).json('ненайдены статьи')

    } catch (e) {
        res.status(500).json({message:'что то пошло не так попробуете снова'})
    }
})

router.get('/more:startId', async(req,res) => {
    try {
        const articleMore = await Articles.find({idArticle: {$lte: Number.parseInt(req.params.startId)}}).
        select('title photo date idArticle').
        limit(3).
        sort({idArticle: -1})

        if (articleMore) {
            return res.send(articleMore)
        }
        res.status(404).json('не найдены статьи')
    } catch (e) {
        res.status(500).json({message:'что то пошло не так попробуете снова'})
    }
})

router.get('/:id', async(req,res) => {
    try {
        const article = await Articles.find({idArticle: Number.parseInt(req.params.id)}).select('body comments')
        if (article) {
           return res.send(article)
        }
        res.status(404).json('не найдены статьи')
    } catch (e) {
        res.status(500).json({message:'что то пошло не так попробуете снова'})

    }
})



router.post('/', async(req,res) => {
    try {
        await Articles.findOneAndUpdate({idArticle: Number.parseInt(req.body.idAr)},
            {
                $push: {
                    comments: {
                        commentText: req.body.comment,
                        commentDate: req.body.commentDate,
                        author: req.body.author
                    }
                }
            }).then(() => res.json('ok'))

        res.status(404).json('не найдены статьи')
    } catch (e) {
        res.status(500).json( { message:'что то пошло не так, попробуйте снова'})
    }
})


module.exports = router