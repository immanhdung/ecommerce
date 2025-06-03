/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API đang chạy...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

// backend/index.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Đã kết nối MongoDB"))
  .catch((err) => console.log(err));

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);
