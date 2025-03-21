const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
require('dotenv').config();
console.log("SECRET_KEY:", process.env.SECRET_KEY);


dotenv.config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'mysecretkey';

const users = [];

app.post('/api/register', async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({username, password: hashedPassword});
    res.status(201).json({message: 'User registered successfully!'});

});

app.post('/api/login', async(req, res) => {
    const{ username, password} = req.body;
    const user = users.find(u => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json ({error: 'Invalid credentials.'});
    }

    const token = jwt.sign({username: user.username}, SECRET_KEY, { expiresIn: '1h' });
    res.json({token});
    
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    console.log("Authorization Header: ", authHeader);

    const token = authHeader && authHeader.split(' ')[1];
    console.log("Extracted Token: ", token);

    if (!token) {
        console.log("No token found");
        return res.sendStatus(401);
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.log("Token verification failed: ", err.message);
            return res.sendStatus(403);
        }
        console.log("Token verified. User: ", user);
        req.user = user;
        next();
    });
}

app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({message: `Hello, ${req.user.username}! Welcome to the protected route.`});

});

app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`);
});