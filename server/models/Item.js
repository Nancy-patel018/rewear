const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  condition: { type: String, required: true },
  tags: { type: String },
  images: [{ type: String }],
  points: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
