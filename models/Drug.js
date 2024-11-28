const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: { // Перейменовано вік пацієнта
        type: String,
        required: true
    },
    expirationDate: { // Перейменовано дату госпіталізації
        type: Date,
        required: true
    },
    department: { 
        type: String,
        required: true,
        enum: ['Піхота', 'Артилерія', 'Розвідка', 'Танкові війська'],
        default: 'Піхота'
    }
});

module.exports = mongoose.model('Drug', DrugSchema);
