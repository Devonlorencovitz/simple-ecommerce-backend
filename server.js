const express = require('express');
const app = express();
const PORT = 3000;
const products = require('./product');

app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
