const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/gamepasses/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const response = await axios.get(`https://nexusapi.xyz/v1/users/${userId}/gamepasses`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch gamepasses' });
    }
});

app.get('/', (req, res) => {
    res.send('Nexus Proxy is Online');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy running on port ${port}`);
});
