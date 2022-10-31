const path = require("path")
const express = require("express")
const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, "/public")))

// app.use(
//   express.static(__dirname + '/public', {
//     index: false,
//     immutable: true,
//     cacheControl: true,
//     maxAge: '30d',
//   })
// )

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () =>
  console.log(`Server listening on port: http://115.127.24.188:${PORT}`)
)
