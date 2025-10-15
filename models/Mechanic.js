const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MechanicSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  street: { type: String },
  services: [String],
  rating: { type: Number, default: 4.0 },
  lat: { type: Number },
  lng: { type: Number },
  open: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

// ❌ Removed text index to avoid MongoDB $text + $or conflict
// MechanicSchema.index({ name: 'text', address: 'text', city: 'text', street: 'text' });

module.exports = mongoose.model('Mechanic', MechanicSchema);
