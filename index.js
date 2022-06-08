import fetch from 'node-fetch';
import express from 'express'

const app = express();

app.listen("8000", () => {
    console.log('listening on port 8000');
});

app.get("/login", (req, res) => {
    console.log("login request - email=" + req.query.email + " password=" + req.query.password);
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: req.query.email,
            password: req.query.password
        })
    })
        .then((r) => r.json())
        .then((rjs) => {
            console.log(rjs);
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.json(rjs);
        })
})