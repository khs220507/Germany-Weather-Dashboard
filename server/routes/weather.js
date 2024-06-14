const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

router.get('/current/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/forecast/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
