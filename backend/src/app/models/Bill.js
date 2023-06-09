const mongoose = require("mongoose")
const deletePlugin = require('mongoose-delete');

const billSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Khách hàng'
    },
    userId: {
        type: String,
        require: true
    },
    order: {
        type: Array,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    
    paymentMethod: {
        type: String,
        default: 'cash'
    },
    status: {
        type: Number,
        default: 0 // o la chua thanh toán, 1 la ok
    },

    totalPrice: {
        type: Number,
        require: true,
    },


}, {timestamps: true})

billSchema.plugin(deletePlugin, { overrideMethods: true, deletedAt: true,});

module.exports = mongoose.model("Bill", billSchema)