const express = require('express');
const path = require('path');
const noteData = require('./db/db.json')

const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/api/notes', (req, res) => res.json(noteData));
app.post('/api/notes')

app.listen(PORT, () => {
    console.log(`Port link: http://localhost:${PORT}`)
});