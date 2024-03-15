const express = require("express")
const fs = require("fs")
require("./consts")

const app = express()

app.use((req, res, next) => {
  const now = new Date()
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url}`;

  console.log(data)

  fs.appendFile('server.log', data + '\n', (err) => {
    if (err) {
      console.log(err)
    }
  })
  next()
})

app.get("/", (req, res) => {
  res.send("Home Page")
})


app.listen(globalThis.PORT, () => console.log(`Server is wokring at adress http://localhost:${globalThis.PORT}`))