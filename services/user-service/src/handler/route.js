console.log(process.env.NODE_PATH, "=================NODE PATH===================");

const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const { getUserList } = require('./controller');

const app = express();
app.use(bodyParser.json());

// Get all students
app.get('/users', async (req, res) => {
    try {
        await getUserList(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Export handler for Lambda
module.exports.handler = serverless(app, {
    callbackWaitsForEmptyEventLoop: false
});
