var express = require("express")
var app = express()

app.get("/api/test", (req, res) => {
    res.send("API working successfully!")
})

// const PORT = 8000
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
module.exports = app