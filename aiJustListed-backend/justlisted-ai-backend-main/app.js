
const connectDatabase = require("./config/db");
const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "200mb",
        extended: true,
        parameterLimit: 1000000
    })
);

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.status(200).send();
});
app.use("/api/v1/user", require("./routes/user.routes")); 
app.use("/api/v1/premade", require("./routes/premade.routes")); 
app.use("/api/v1/fillup", require("./routes/fillup.routes")); 
app.use("/api/v1/usermade", require("./routes/usermade.routes")); 
app.use("/api/v1/uploads", express.static("uploads"));
app.use((req, res, next) => {
    const error = new Error("NOT found");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: "Something went rely wrong or ivalid routes or method"
        }
    });
});

connectDatabase();

module.exports = app;
