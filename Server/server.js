const express = require("express")
const { connectDB , disconnectDB , isConnected} = require('./db.js')

const app = express()
const Router = require('./router.js')
const PORT = 4000

const printStatus = async() => {
    await connectDB()
    console.log("MongoDB Connection Status -> ",isConnected())
}

printStatus()

app.get('/home',(req,res)=> {
    connectDB()
    res.json({isConnected : isConnected()})
})


app.use(Router)

app.get('/',(req,res) => {
    res.json({"MongoDB Connection Status" : isConnected()})
})

app.get('/ping',(req,res) => {
    res.send("pong")
})
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})