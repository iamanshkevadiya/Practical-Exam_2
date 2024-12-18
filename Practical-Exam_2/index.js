const express = require('express');
require('dotenv').config();

const cors = require('cors');
const connectDB = require('./config/db');
const { commentRouter } = require('./router/comment.route');
const ratingRoute = require('./router/rating.route');
const trackRoute = require('./router/tracking.route');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.use('/comment', commentRouter);
app.use('/rating', ratingRoute);
app.use('/track', trackRoute);


const PORT = 8090;
app.listen(PORT, () => {
    console.log("Connect to port ", PORT);
    connectDB();
})