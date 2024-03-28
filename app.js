const express = require("express")
require("./consts")

const app = express()

app.use("/static", express.static("public"))

app.get("/", function (req, res) {
  res.send("<h1>Главная страница</h1>");
});

app.get('/about', (req, res) => {
  const { name } = req.query

  let resText = "<ul>"

  for (item of name) {
    resText += `<li>${item}</li>`
  }

  resText += "</ul>"

  return res.send(resText)
})

app.get("/info", (req, res) => {
  console.log(req.query)
  const { user } = req.query

  res.send(`Hello, my name is ${user.name} and im ${user.age}`)
})

app.listen(globalThis.PORT, () => console.log(`Server is Working at adress http://localhost:${globalThis.PORT}`))