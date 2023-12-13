const express = require("express");
const router = express.Router();

const aiDataController = require('../controllers/aiDataController')

router
    .route('/aiData')
    .get(aiDataController.getAIData)
    .post(aiDataController.postAIData);

module.exports = router;