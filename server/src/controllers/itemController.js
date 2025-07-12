const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    let { title, description, category, type, size, condition, tags, points } = req.body;
    // Parse tags if it's a string (comma-separated)
    if (typeof tags === 'string') {
      tags = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    }
    let imagePaths = [];
    if (req.files) {
      imagePaths = req.files.map(file => `/uploads/${file.filename}`);
    }
    const item = new Item({
      user: req.user.id,
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
      images: imagePaths,
      points
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('user', 'username email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('user', 'username email');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
