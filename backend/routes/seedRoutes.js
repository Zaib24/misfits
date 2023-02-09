import express from 'express';
import Product from '../models/ProductModel.js';
import data from '../Data.js';
import User from '../models/UserModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // For Product Model
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  // For User Model
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdUsers, createdProducts });
});

export default seedRouter;
