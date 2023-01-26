const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;

console.log(process.env);

app.get("/", (req, res) => {
    res.send("Hello from the cloud!!!");
});

app.listen(PORT,  () => {
    console.log(`Server is listening at Port ${PORT}`);
});
