const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const rand = require("random-js")
const { nativeMath } = require("random-js")
const favi = require("serve-favicon")
const port = 3000

var app = express()

app.use(morgan("tiny"))
app.use(cors())

app.use("/static", express.static("./public"))
app.use(favi("./public/favicon.ico"))

app.get("/", (req, res) => {
    res.redirect("/static")
})

app.get("/api/rand", (req,res) => {
    res.json({"ran": rand.integer(req.query.min, req.query.max)(nativeMath)})
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port} !`)
})
