const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./router")

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(process.env.port, () => {
  console.log(`Server has started on port ${process.env.port}`)
})