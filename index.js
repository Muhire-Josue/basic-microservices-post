const express = require('express');
const { randomBytes } = require('crypto');

const app = express();
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('posts', (req, res) => {

});

app.listen(4000, () => console.log('Server running on port 4000...'));
