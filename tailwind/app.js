const path = require('path')
const express = require('express')

const app = express()
const port = 3000

/**
 * Code snippet for hot reloadings.
 * You can wipe this at production.
 */
const livereload = require("livereload")
const connectlivereload = require("connect-livereload")
app.use(connectlivereload())
const livereloadserver = livereload.createServer()
livereloadserver.watch(path.join(__dirname, "views"))
livereloadserver.watch(path.join(__dirname, "public"))
livereloadserver.server.once("connection", () => {
  setTimeout(() => livereloadserver.refresh("/"), 100)
})

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
   * Code snippet for dev purpose.
   * You can wipe this at production.
   */
  const netface = require('./utils/netface')
  const linkfaces = netface.ipv4s()
  linkfaces.forEach((face) => {
    console.info(`http://${face}:${port}`)
  })
})
