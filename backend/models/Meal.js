const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number },
    weight: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Meal', mealSchema);
