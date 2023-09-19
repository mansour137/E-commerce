const Order = require('../Model/orderModel');
const factory = require('./factoryHandler');

exports.getAllOrder = factory.getAllOrOne(Order);
exports.addOrder = factory.creatNewOne(Order);
exports.deleteOrder = factory.delete(Order);
