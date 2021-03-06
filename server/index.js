const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

const propertyCtrl = require("./controllers/property_controller");
const authCtrl = require("./controllers/auth_controller");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

// auth
app.post("/api/auth/login", authCtrl.login);
app.post("/api/auth/register", authCtrl.register);
app.post("/api/auth/logout", authCtrl.logout);

// property
app.get("/api/properties", propertyCtrl.getProperty);
app.post("/api/properties", propertyCtrl.createProperty);
app.delete("/api/properties/:id", propertyCtrl.deleteProperty);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
