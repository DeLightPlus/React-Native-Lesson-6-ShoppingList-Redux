const express = require('express');
const ShoppingItem = require('../models/ShoppingItem');

const router = express.Router();

// Create item
router.post('/items', async (req, res) => {
  try {
    const item = await ShoppingItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await ShoppingItem.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete item
router.delete('/items/:id', async (req, res) => {
  try {
    await ShoppingItem.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
