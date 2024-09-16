const path = require('path')
const express = require('express')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
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

app.listen(PORT, () => {
  const nets = require('./utils/nets')
  console.log('Server has been started on...');
  nets.showAvailableNetworks(PORT)
})
