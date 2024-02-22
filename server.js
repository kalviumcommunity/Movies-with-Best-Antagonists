const express = require("express")
const app = express()
const PORT = 3000

app.get('/ping',(req,res) => {
    res.send("pong")
    console.log("bdeibf")
})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})