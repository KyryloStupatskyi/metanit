const http = require("http")
const fs = require('fs')
require("./consts")

http.createServer(async (req, res) => {
  if (req.url === "/user") {
    const buffers = []

    for await (const chunk of req) {
      buffers.push(chunk)
    }

    const user = JSON.parse(buffers.toString())
    console.log(user.name, '-', user.age)

    res.end("Data successfully gets")
  } else {
    fs.readFile("./index.html", (err, data) => {
      res.end(data)
    })
  }
}).listen(globalThis.PORT, () => console.log(`Server is working on PORT ${globalThis.PORT}`))