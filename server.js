const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Serve the static login HTML page
app.use(express.static('public'));

// Mock user data for demonstration purposes
const users = [
    { username: 'testuser', password: 'password123' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
