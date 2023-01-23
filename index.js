const express = require("express");
const app = express();
const Port = 8080;

app.get("/", (req, res) => {
    res.send("Hello from the cloud!!!");
});

app.listen(Port, () => {
    console.log(`Server is listening at Port ${Port}`);
});
