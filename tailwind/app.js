const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use('/colors', express.static(
  path.join(__dirname, 
    'node_modules', 
    'material-dynamic-colors', 
    'dist', 
    'cdn'
  )
))

app.get('/', (req, res) => res.render('home'))

app.listen(port, () => {
  /**
   * The above code is exclusivly for dev purpose.
   * You can replace this function.
   */
  const netface = require('./utils/netface')
  const linkfaces = netface.ipv4s()
  linkfaces.forEach((face) => {
    console.info(`http://${face}:${port}`)
  })
})
