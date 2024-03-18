const express = require("express")
require("./consts")

const app = express()

// app.use((req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.use("/home/some", (req, res) => {
  res.status(404).send("Resourses not found")
})

app.listen(globalThis.PORT, () => console.log(`Server is Working at adress http://localhost:${globalThis.PORT}`))