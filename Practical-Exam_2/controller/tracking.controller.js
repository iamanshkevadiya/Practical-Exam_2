const Track = require("../models/traking.model");

const getTrackingStatus = async (req, res) => {
    try {
        const { productId } = req.params;
        const tracking = await Track.findOne({ productId });
        res.status(200).json(tracking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTrackingStatus = async (req, res) => {
    try {
        const { productId, status } = req.body;
        const updatedTracking = await Tracking.findOneAndUpdate(
            { productId },
            { status, updatedAt: Date.now() },
            { new: true, upsert: true }
        );
        res.status(200).json(updatedTracking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getTrackingStatus, updateTrackingStatus };