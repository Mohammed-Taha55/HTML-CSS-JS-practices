const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "This is fine"
    })
})

app.listen(3000);