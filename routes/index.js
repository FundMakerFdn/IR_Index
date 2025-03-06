const express = require('express');  
const router = express.Router();  
const { getLDRIndex } = require('../services/lendingRateService');  

// Fetch LDR Index  
router.get('/ldr-index', async (req, res) => {  
    try {  
        const ldr = await getLDRIndex();  
        res.json({ ldr_index: ldr });  
    } catch (err) {  
        console.error(err);  
        res.status(500).json({ message: 'Error fetching LDR index' });  
    }  
});  

// Add other endpoints (e.g., to save lending data)  

module.exports = router;  