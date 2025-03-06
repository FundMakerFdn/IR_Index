const pool = require("../config/db");

// Fetch weighted LDR from DB
const getLDRIndex = async () => {
  const query = `  
    SELECT   
      SUM(lending_rate * total_lent) / SUM(total_lent) AS ldri_index  
    FROM lending_rates;  
  `;
  const result = await pool.query(query);
  return result.rows[0].ldri_index || 0; // Default to 0 if no data exists
};

// Insert new lending data
const saveLendingRate = async (protocolId, assetId, lendingRate, totalLent) => {
  const query = `  
    INSERT INTO lending_rates (protocol_id, asset_id, lending_rate, total_lent)  
    VALUES ($1, $2, $3, $4)  
    RETURNING *;  
  `;
  const values = [protocolId, assetId, lendingRate, totalLent];
  return pool.query(query, values);
};

module.exports = { getLDRIndex, saveLendingRate };
