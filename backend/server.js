import express from 'express';
import data from './Data.js';

const app = express();
// Products API
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// Setting up Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
