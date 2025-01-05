const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['Caps', 'Accessories', 'Kaftans', 'Agbada', 'TdaRetail', 'Suites', 'Asoke']
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;