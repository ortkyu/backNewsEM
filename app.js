const express = require('express')
const mongoose = require('mongoose')


app = express()


app.use(express.json({ extended: true })) // for parsing application/json

app.use('/', require('./routes/articles.routes'))
app.use('/more', require('./routes/articles.routes'))


 const PORT =  5000

 async function start () {
    try {
        await mongoose.connect('mongodb+srv://password@cluster0.wdfrb.azure.mongodb.net/...?retryWrites=true&w=majority', {
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



