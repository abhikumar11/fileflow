const express = require("express");
const connectDb = require("./config/DbConnection");
const cors = require("cors")
const router = require("./routes/router");
const port=3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
connectDb();

app.listen(port,() => {
    console.log("listening on port: ",port);
});