const { Router } = require('express');
const { getTrackingStatus, updateTrackingStatus } = require('../controller/tracking.controller');

const trackRoute = Router();

trackRoute.get('/track', getTrackingStatus);
trackRoute.patch('/track/:productId', updateTrackingStatus);

module.exports = trackRoute;