require("./config/database")

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const app = express()
const contactRouter = require("./routes/contact.route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use("/api/contacts", contactRouter)
app.use(express.static("client/build"))
app.get("*", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/client/build/index.html" ))
})

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

