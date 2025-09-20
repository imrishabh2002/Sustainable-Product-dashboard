import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { search, category, page = 1, limit = 5 } = req.query;
  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  const total = await Product.countDocuments(query);

  res.json({ products, total });
});

router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

router.get('/top', async (req, res) => {
  const topProducts = await Product.find().sort({ sustainabilityScore: -1 }).limit(5);
  res.json(topProducts);
});

export default router;
