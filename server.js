const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;
app.use(cors());


app.get('/search', (req, res) => {
    res.send({
        success: true,
        data: [Date.now() + "Somethingelse dgsgsfd"]
    });
});


app.use(express.static('public'));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(port, () => console.log('Running on port ', port));