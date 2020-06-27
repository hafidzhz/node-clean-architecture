const express = require('express')
const bodyParser = require('body-parser')

const Routes = require('./src/routes')
const Database = require('./src/database')

const app = express()
const port = process.env.PORT || 3000
const connectionDb = 'mongodb://localhost:27017/booksApp' || process.env.CONNECTIONDB

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Routes())

new Database(connectionDb)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`)
    })
  })
