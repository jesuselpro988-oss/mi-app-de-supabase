require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/config', (req, res) => {
    res.json({
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_ANON_KEY
    });
});

app.listen(3000, () => {
    console.log('¡Tienda corriendo en http://localhost:3000!');
});