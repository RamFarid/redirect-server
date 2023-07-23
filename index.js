const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5050

app.use(cors())

app.get('/', (req, res) => {
  const { url } = req.query
  if (!url) return res.status(422).send('Missing URL as a parameter')
  res.redirect(decodeURIComponent(url))
})

app.listen(PORT, () => console.log('Server run on port: ', PORT))
