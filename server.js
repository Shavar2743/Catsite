const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get("/home", (req, res) => {
    res.sendFile(
        __dirname + "/1.html"
    );
});

app.get("/1", (req, res) => {
    res.sendFile(
        __dirname + "/2.html"
    );
});

app.get("/2", (req, res) => {
    res.sendFile(
        __dirname + "/3.html"
    );
});

app.get("/3", (req, res) => {
    res.sendFile(
        __dirname + "/4.html"
    );
});

app.get("/4", (req, res) => {
    res.sendFile(
        __dirname + "/5.html"
    );
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
    console.log(`http://localhost:${PORT}/home`)
});
