require("dotenv").config();
const express = require("express");
const app = express();
const authroute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const cors = require("cors");
const connectDb = require("./utillts/db");
const errormiddleware = require("./middlewares/error-middleware");

// cors tackle
const coreOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(coreOptions));

app.use(express.json()); //Middleware

app.use("/api/auth", authroute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// admin Route
app.use("/api/admin", adminRoute)

app.use(errormiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is start : http://localhost:${PORT}`);
  });
});
