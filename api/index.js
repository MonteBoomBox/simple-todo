const axios = require("axios").default
var express = require("express")
var app = express()

app.use(express.json())

app.get("/api/test", (req, res) => {
    
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
        res.json(response.data)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
    
    // res.send("API working successfully!")
})

// const PORT = 8000
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
module.exports = app