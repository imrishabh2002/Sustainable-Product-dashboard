import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err));

const products = [
  { name: "Organic Cotton T-Shirt", description: "Eco-friendly cotton shirt", category: "Clothing", sustainabilityScore: 9, price: 25 },
  { name: "Bamboo Toothbrush", description: "Biodegradable toothbrush", category: "Personal Care", sustainabilityScore: 10, price: 3 },
  { name: "Solar Power Bank", description: "Rechargeable solar bank", category: "Electronics", sustainabilityScore: 8, price: 40 },
  { name: "Recycled Notebook", description: "Made from recycled paper", category: "Stationery", sustainabilityScore: 7, price: 5 },
  { name: "Eco Sneakers", description: "Shoes made from recycled plastic", category: "Footwear", sustainabilityScore: 8, price: 60 }
];

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
