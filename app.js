const express = require("express")
require("./consts")

const app = express()

app.use("/static", express.static("public"))

// app.use("/home", (req, res) => {
//   res.redirect("https://metanit.com")
// })

app.get("/someRoute", (req, res) => {
  res.redirect("about")
})

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>")
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(globalThis.PORT, () => console.log(`Server is Working at adress http://localhost:${globalThis.PORT}`))