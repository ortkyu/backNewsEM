const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


app = express()


app.use(express.json({ extended: true })) // for parsing application/json

app.use('/', require('./routes/articles.routes'))
app.use('/more', require('./routes/articles.routes'))


 const PORT =  5000

 async  function  start () {
    try {
        await mongoose.connect('mongodb+srv://john:111111jo@cluster0.wdfrb.azure.mongodb.net/news?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`сервер старт ${PORT}`))
    } catch (e) {
        console.log('сервер не работает', e.message)
        process.exit(1)
    }
}

start()



