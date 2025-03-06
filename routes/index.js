const express = require("express");
const router = express.Router();
const { getLDRIndex, saveLendingRate } = require("../services/ldriService");

// Retrieve LDRI Index
router.get("/ldr-index", async (req, res) => {
  try {
    const ldriIndex = await getLDRIndex();
    res.json({ ldri: ldriIndex });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error calculating LDRI" });
  }
});

// Add other endpoints for fetching historical rates, inserting mock data, etc.

module.exports = router;
