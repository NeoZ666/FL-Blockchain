const express = require('express');
const bodyParser = require('body-parser')
const morgan = require("morgan");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// MIDDLEWARES :
const app = express();
app.use(morgan("dev"));

// BODY PARSER : 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROUTE HANDLERS :
const aiDataRoutes = require('./routes/aiDataRoutes');

// HANDLING URLS :
app.use('/api/v1/', aiDataRoutes);

// GLOBAL HANDLERS :
app.all('*', (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

// PORT RUNNING :
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
