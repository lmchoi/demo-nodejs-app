function routes (app) {
  app.get('/', (req, res) => {
    res.send('Hello world FROM routes\n')
  })

  app.get('/blah', (req, res) => {
    res.send('Hello world FROM blah\n')
  })
}

module.exports = routes
