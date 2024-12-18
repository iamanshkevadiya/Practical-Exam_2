const { default: mongoose } = require("mongoose");

const TrackingSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    status: { type: String, required: true, enum: ['Ordered', 'Shipped', 'In Transit', 'Delivered', 'Cancelled'] },
    updatedAt: { type: Date, default: Date.now }
});

const Track = mongoose.model("Trak", TrackingSchema);
module.exports = Track;