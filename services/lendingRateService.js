const pool = require('../config/db');  

// Save lending rate to the database  
const saveLendingRate = async (protocolId, assetId, lendingRate, totalLent) => {  
    const query = `  
        INSERT INTO lending_rates (protocol_id, asset_id, lending_rate, total_lent)  
        VALUES ($1, $2, $3, $4)  
        RETURNING *;  
    `;  
    const values = [protocolId, assetId, lendingRate, totalLent];  
    return pool.query(query, values); // Insert and return  
};  

// Calculate LDR (weighted average of lending rates)  
const getLDRIndex = async () => {  
    const query = `  
        SELECT   
            SUM(lending_rate * total_lent) / SUM(total_lent) AS ldr_index  
        FROM lending_rates;  
    `;  
    const result = await pool.query(query);  
    return result.rows[0].ldr_index;  
};  

module.exports = { saveLendingRate, getLDRIndex };  