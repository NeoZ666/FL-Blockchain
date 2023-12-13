const express = require("express")
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
const { aiData } = require('./controllers/aiData')

app.get('/', (req, res) => {
    res.send("<h1> FL-BLOCKCHAIN </h1>")
})


app.get('/aiData', aiData);


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})

