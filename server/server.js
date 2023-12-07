require("dotenv").config();
const express = require("express");
const app = express();
const authroute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const connectDb = require("./utillts/db");
const errormiddleware = require("./middlewares/error-middleware");

app.use(express.json()); //Middleware

app.use("/api/auth", authroute);
app.use("/api/form", contactRoute);

app.use(errormiddleware);

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is start : http://localhost:${PORT}`);
    });
})