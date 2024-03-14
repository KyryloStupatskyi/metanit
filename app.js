const express = require("express")
require("./consts")

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>")
})

app.get('/about', (req, res) => {
  res.send("<h1>About Page</h1>")
})

app.get('/contacts', (req, res) => {
  res.send("<h1>Contacts Page</h1>")
})


app.listen(globalThis.PORT, () => console.log(`Server is working at adress http://localhost:${globalThis.PORT}`))