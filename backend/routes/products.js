const express = require('express');
const router = express.Router();

// Import your existing data (temporary until database is set up)
const products = require('../data/products');

// GET all products
router.get('/', async (req, res) => {
  try {
    const { category, search, sort, limit = 20, page = 1 } = req.query;
    
    let filteredProducts = [...products];
    
    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Search by title
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Sort products
    if (sort) {
      switch (sort) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          break;
      }
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    res.json({
      products: paginatedProducts,
      total: filteredProducts.length,
      page: parseInt(page),
      totalPages: Math.ceil(filteredProducts.length / limit)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// GET products by category
router.get('/category/:category', async (req, res) => {
  try {
    const categoryProducts = products.filter(product =>
      product.category.toLowerCase() === req.params.category.toLowerCase()
    );
    
    res.json(categoryProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category products' });
  }
});

module.exports = router;
