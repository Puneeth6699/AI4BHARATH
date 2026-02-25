const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('ContentFlow AI Backend Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
