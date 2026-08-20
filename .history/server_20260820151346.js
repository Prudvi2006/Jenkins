const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send(`
            <h1>Login Successful!</h1>
            <p>Welcome ${username}</p>
            <a href="/">Back</a>
        `);
    } else {
        res.send(`
            <h1>Login Failed!</h1>
            <p>Invalid username or password.</p>
            <a href="/">Try Again</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});