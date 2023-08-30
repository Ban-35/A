const path = require('path')

const express = require('express')

const app = express()

app.use('/static', express.static('src/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/public/index.html"))
})

app.listen(3000, () => {
    console.log('Server on port 3000')
})