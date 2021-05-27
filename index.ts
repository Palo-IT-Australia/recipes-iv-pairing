import App from './src/App'

const port = process.env.PORT || 3000

App.listen(port, (err: unknown) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})
