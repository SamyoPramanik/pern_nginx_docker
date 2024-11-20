const keys = require("./keys");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on("connect", () => {
    pgClient
        .query("CREATE TABLE IF NOT EXISTS mytable (number INT)")
        .catch((err) => console.log("table is not created", err));
    console.log("Connected 1 to PG");
});

pgClient
    .query("CREATE TABLE IF NOT EXISTS mytable (number INT)")
    .catch((err) => console.log("table is not created", err));
console.log("Connected to PG");

pgClient.on("error", () => console.log("Lost PG connection"));

app.get("/", (req, res) => {
    res.send("Hi");
});

app.get("/values/all", async (req, res) => {
    const values = await pgClient.query("SELECT * from mytable");
    res.send(values.rows);
});

app.post("/values", async (req, res) => {
    if (!req.body.value) res.send({ working: false });
    pgClient.query("INSERT INTO mytable(number) VALUES($1)", [req.body.value]);
    res.send({ working: true });
});

app.listen(5000, (err) => {
    console.log("Listening on port 5000");
});
