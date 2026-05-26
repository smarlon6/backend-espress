const express = require('express')
const cors = require('cors')

const petRoutes = require('./routes/petRoutes')
const tutorRoutes = require('./routes/tutorRoutes')

const app = express()

const host = '127.0.0.1'
const port = 3333

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API de Cadastro de Pets e Tutores'
  })
})

app.use('/pets', petRoutes)
app.use('/tutores', tutorRoutes)

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})