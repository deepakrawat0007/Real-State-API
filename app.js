const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/route')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", routes)
app.get("/" , (req,res)=>{
    res.status(200).json({
        "Message":"Server is ok"
    })
})

module.exports = app