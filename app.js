const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.get('/version', (req, res) => {
  res.send('21')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use((req, res, next) => {
  if (req.path === '/') {
    return res.status(500).send('Simulated 500 Internal Server Error')
  }

  next()
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
