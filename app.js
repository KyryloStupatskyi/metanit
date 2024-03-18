const express = require("express")
require("./consts")

const app = express()

app.use("/static", express.static("public"))

app.use('/', (req, res) => {
  res.send("<h1>Main Page</h1>")
})

app.listen(globalThis.PORT, () => console.log(`Server is Working at adress http://localhost:${globalThis.PORT}`))