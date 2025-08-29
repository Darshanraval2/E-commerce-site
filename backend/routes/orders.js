const express = require('express');
const router = express.Router();

// Temporary order storage (replace with database)
let orders = [];

// CREATE new order
router.post('/', (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, total } = req.body;
    
    const newOrder = {
      id: orders.length + 1,
      userId: 1, // This would come from JWT token
      items,
      shippingAddress,
      paymentMethod,
      total,
      status: 'pending',
      createdAt: new Date()
    };
    
    orders.push(newOrder);
    
    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
});

// GET all orders for user
router.get('/', (req, res) => {
  try {
    const userOrders = orders.filter(order => order.userId === 1);
    res.json(userOrders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// GET single order
router.get('/:id', (req, res) => {
  try {
    const order = orders.find(order => order.id === parseInt(req.params.id));
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order' });
  }
});

// UPDATE order status
router.put('/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const order = orders.find(order => order.id === parseInt(req.params.id));
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    order.status = status;
    order.updatedAt = new Date();
    
    res.json({
      message: 'Order status updated',
      order
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating order' });
  }
});

module.exports = router;
