const axios = require("axios").default
var express = require("express")
var app = express()

app.get("/api/test", (req, res) => {
    
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
        res.send(res.data)
    }).catch((err) => {
        console.error(err)
        res.status(500).send("Server Error")
    })
    
    // res.send("API working successfully!")
})

// const PORT = 8000
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
module.exports = app